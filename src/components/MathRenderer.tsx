import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  math: string;
  displayMode?: boolean;
  className?: string;
}

// Convert caret exponents to proper unicode superscripts
export function formatSuperscripts(text: string): string {
  if (!text) return '';
  return text
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^4\b/g, '⁴')
    .replace(/\^5\b/g, '⁵')
    .replace(/\^t\b/g, 'ᵗ')
    .replace(/\^x\b/g, 'ˣ')
    .replace(/\^n\b/g, 'ⁿ')
    .replace(/\^0\b/g, '⁰')
    .replace(/\^1\b/g, '¹')
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³');
}

/**
 * Universal SAT Math Text Sanitizer:
 * - Removes unnecessary LaTeX math $ and $$ delimiters (e.g. "$4x + 5 = 21$" -> "4x + 5 = 21")
 * - Strictly preserves dollar signs for money/costs in word problems (e.g. "$1,020", "$50", "$800")
 * - Converts caret power notation ("2x^2", "r^2", "(x-3)^2") into proper mathematical powers ("2x²", "r²", "(x-3)²")
 */
export function sanitizeSatMath(text: string): string {
  if (!text) return '';

  // Step 1: Temporarily protect currency values like $1,020, $500, $50, $1.50
  const currencyTokens: string[] = [];
  let s = text.replace(
    /(^|\s|[([{"'])\$(\d{1,3}(,\d{3})*(\.\d{2})?|\d+(\.\d{2})?)\b/g,
    (match, prefix, amount) => {
      currencyTokens.push(`${prefix}$${amount}`);
      return `___ISAT_CURRENCY_${currencyTokens.length - 1}___`;
    }
  );

  // Step 2: Remove LaTeX math delimiters ($$...$$ and $...$)
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, '$1');
  s = s.replace(/\$([^\$\n]+?)\$/g, '$1');

  // Step 3: Replace carets with proper unicode square and cubic superscripts
  s = formatSuperscripts(s);

  // Step 4: Clean up common raw LaTeX commands that shouldn't appear as raw backslashes
  s = s
    .replace(/\\implies/g, '⟹')
    .replace(/\\times/g, '×')
    .replace(/\\pm/g, '±')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\sqrt/g, '√')
    .replace(/\\pi/g, 'π')
    .replace(/\\theta/g, 'θ')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\circ/g, '°')
    .replace(/\\ge/g, '≥')
    .replace(/\\le/g, '≤')
    .replace(/\\neq/g, '≠')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2');

  // Step 5: Restore protected currency tokens
  s = s.replace(/___ISAT_CURRENCY_(\d+)___/g, (_, idx) => {
    return currencyTokens[parseInt(idx, 10)] || '';
  });

  return s;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  math,
  displayMode = false,
  className = '',
}) => {
  const html = useMemo(() => {
    try {
      let cleanMath = math.trim();
      if (cleanMath.startsWith('$$') && cleanMath.endsWith('$$')) {
        cleanMath = cleanMath.slice(2, -2).trim();
      } else if (cleanMath.startsWith('$') && cleanMath.endsWith('$')) {
        cleanMath = cleanMath.slice(1, -1).trim();
      }

      // Replace Unicode square root, pi, plus-minus, degrees if raw
      cleanMath = cleanMath
        .replace(/π/g, '\\pi ')
        .replace(/√/g, '\\sqrt ')
        .replace(/±/g, '\\pm ')
        .replace(/°/g, '^\\circ ')
        .replace(/Δ/g, '\\Delta ')
        .replace(/θ/g, '\\theta ')
        .replace(/²/g, '^2')
        .replace(/³/g, '^3');

      return katex.renderToString(cleanMath, {
        displayMode,
        throwOnError: false,
        output: 'htmlAndMathml',
      });
    } catch (e) {
      console.warn('KaTeX render error:', e);
      return null;
    }
  }, [math, displayMode]);

  if (!html) {
    return <span className={`font-serif italic ${className}`}>{formatSuperscripts(math)}</span>;
  }

  return (
    <span
      className={`katex-rendered inline-block ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

// Universal Component to render text containing mathematical expressions
// with proper superscripts (x²), roots, and Greek letters, without unwanted dollar signs
export const FormattedMathText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  const cleaned = useMemo(() => {
    return sanitizeSatMath(text);
  }, [text]);

  return <span className={className}>{cleaned}</span>;
};
