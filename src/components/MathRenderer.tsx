import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  math: string;
  displayMode?: boolean;
  className?: string;
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
        .replace(/θ/g, '\\theta ');

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
    return <span className={`font-serif italic ${className}`}>{math}</span>;
  }

  return (
    <span
      className={`katex-rendered inline-block ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

// Helper to check if a single short string looks like a mathematical equation or expression
function isMathExpression(str: string): boolean {
  const trimmed = str.trim();
  // If it contains equations, exponents, roots, or trig functions
  if (
    /^(y|f\(x\)|g\(x\)|h\(x\)|A|C|V|s)\s*=\s*.+/i.test(trimmed) ||
    /(\^2|\^3|\^[0-9]|\^[a-z]|\(x\s*[-+]\s*[0-9]+\)\^2|\\sqrt|\\frac|\\pi|\\pm|\\Delta|\\theta|\+.*=.*)/.test(
      trimmed
    ) ||
    /^[0-9]+(\/[0-9]+)?π?$/.test(trimmed) ||
    /^[0-9]+π$/.test(trimmed)
  ) {
    return true;
  }
  return false;
}

// Convert common raw math markers in plain text to proper superscripts & KaTeX
function formatPlainTextChunk(textChunk: string): React.ReactNode[] {
  // Match tokens like x^2, (x-h)^2, r^2, r^3, 24/7, 6π, etc.
  const tokenRegex = /(\([^\)]+\)\^[0-9]+|[a-zA-Z0-9]+\^[0-9]+|[0-9]+π|[0-9]+\/[0-9]+)/g;
  const parts = textChunk.split(tokenRegex);

  return parts.map((chunk, i) => {
    if (tokenRegex.test(chunk)) {
      return <MathRenderer key={i} math={chunk} displayMode={false} />;
    }
    return chunk;
  });
}

// Universal Component to render text containing embedded LaTeX ($...$, $$...$$)
// or raw mathematical expressions with proper superscripts (x^2), roots, and Greek letters
export const FormattedMathText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  const renderedContent = useMemo(() => {
    if (!text) return null;

    const trimmed = text.trim();

    // If the entire text is a math formula (e.g. "f(x) = 2(x - 3)^2 + 5" or "x^2 + y^2 = 25")
    if (!trimmed.includes('\n') && isMathExpression(trimmed)) {
      return <MathRenderer math={trimmed} displayMode={false} />;
    }

    // Split by $$...$$ or $...$
    const mathSplitRegex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    const parts = text.split(mathSplitRegex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const mathContent = part.slice(2, -2).trim();
        return (
          <div key={index} className="my-2.5 text-center overflow-x-auto">
            <MathRenderer math={mathContent} displayMode={true} />
          </div>
        );
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const mathContent = part.slice(1, -1).trim();
        return <MathRenderer key={index} math={mathContent} displayMode={false} />;
      }

      // For plain text segments, handle any embedded x^2, r^3, 24π, etc.
      return <React.Fragment key={index}>{formatPlainTextChunk(part)}</React.Fragment>;
    });
  }, [text]);

  return <span className={className}>{renderedContent}</span>;
};
