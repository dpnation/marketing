/* @ds-bundle: {"format":4,"namespace":"ApplauseDesignSystem_cb20f0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"LogoLockup","sourcePath":"components/core/LogoLockup.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"StatCallout","sourcePath":"components/core/StatCallout.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3a8b97de3fc8","components/core/Button.jsx":"b54c6e5ea2ce","components/core/Card.jsx":"0d2489746d01","components/core/Divider.jsx":"42b2ab8697f4","components/core/Icon.jsx":"1d4ad6013b44","components/core/LogoLockup.jsx":"9912fd905022","components/core/Pill.jsx":"a57f61e9ed93","components/core/Quote.jsx":"8a168a2defaf","components/core/SectionHeader.jsx":"d16891e31f0b","components/core/StatCallout.jsx":"3e74e9ca6e6b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ApplauseDesignSystem_cb20f0 = window.ApplauseDesignSystem_cb20f0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const palette = {
  blue: ['var(--blue-100)', 'var(--blue-500)'],
  cyan: ['#ECFBFD', '#007D98'],
  red: ['var(--red-100)', 'var(--red-500)'],
  orange: ['var(--orange-100)', '#B45600'],
  yellow: ['#FEF9E9', 'var(--yellow-700)'],
  green: ['#F0FDF0', '#0E8618'],
  purple: ['var(--purple-100)', 'var(--purple-500)'],
  gray: ['var(--gray-200)', 'var(--gray-700)']
};
function Badge({
  color = 'gray',
  children
}) {
  const [bg, fg] = palette[color];
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--radius-xs)',
      background: bg,
      color: fg,
      font: 'var(--text-body-xs)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  brand = 'applause',
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) {
  const padX = {
    lg: 24,
    md: 20,
    sm: 16,
    xs: 12
  }[size];
  const height = {
    lg: 48,
    md: 40,
    sm: 36,
    xs: 32
  }[size];
  const fontSize = {
    lg: 18,
    md: 16,
    sm: 14,
    xs: 12
  }[size];
  const radius = brand === 'utest' ? 'var(--radius-round)' : 'var(--radius-xs)';
  const accent = brand === 'utest' ? 'var(--cerulean-600)' : 'var(--brand-primary)';
  const base = {
    boxSizing: 'border-box',
    height,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: radius,
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    paddingInline: padX,
    fontFamily: 'var(--font-brand)',
    fontSize,
    fontWeight: 600,
    lineHeight: 1,
    transition: 'background-color .15s ease, color .15s ease, border-color .15s ease'
  };
  const variants = {
    primary: {
      background: 'var(--status-warning)',
      color: 'var(--gray-800)'
    },
    secondary: {
      background: accent,
      color: '#fff'
    },
    tertiary: {
      background: 'transparent',
      color: accent,
      borderColor: accent
    }
  };
  const style = disabled ? {
    ...base,
    background: 'var(--gray-200)',
    color: 'var(--text-disabled)',
    borderColor: 'transparent'
  } : {
    ...base,
    ...variants[variant]
  };
  return React.createElement('button', {
    style,
    disabled,
    onClick
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  elevation = 'sm',
  children
}) {
  const shadow = {
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    none: 'none'
  }[elevation];
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      boxShadow: shadow,
      padding: 'var(--space-24)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  inset = false
}) {
  return React.createElement('hr', {
    style: {
      border: 'none',
      borderTop: '1px solid var(--border-subtle)',
      margin: inset ? '0 var(--space-24)' : 0,
      width: inset ? 'auto' : '100%'
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const BASE = './assets/icons-streamline/';
function Icon({
  name,
  size = 24,
  color
}) {
  if (!name) return null;
  const src = BASE + name + '--Streamline-Streamline-3.0.svg';
  return React.createElement('img', {
    src,
    alt: name,
    width: size,
    height: size,
    style: {
      display: 'inline-block',
      filter: color ? undefined : undefined
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/LogoLockup.jsx
try { (() => {
const LOGOS = {
  applause: {
    full: './assets/logos/applause-full-color.svg',
    knockout: './assets/logos/applause-knockout.svg',
    dark: './assets/logos/applause-one-color-dark.svg',
    light: './assets/logos/applause-one-color-light.svg'
  },
  utest: {
    full: './assets/logos/utest-full-color.svg',
    knockout: './assets/logos/utest-knockout.svg',
    dark: './assets/logos/utest-one-color-dark.svg',
    light: './assets/logos/utest-one-color-light.svg'
  }
};
function Mark({
  brand = 'applause',
  variant = 'full',
  size = 20
}) {
  return React.createElement('img', {
    src: LOGOS[brand][variant],
    alt: brand === 'applause' ? 'Applause' : 'uTest',
    style: {
      height: size,
      display: 'block'
    }
  });
}
function LogoLockup({
  brand = 'applause',
  variant = 'full',
  size = 20,
  kind = 'text',
  lockupText,
  partnerLabel,
  partnerLogoSrc,
  partnerLogoHeight
}) {
  const knockout = variant === 'knockout';
  if (kind === 'customer' || kind === 'partner') {
    const partnerSize = partnerLogoHeight || size * 1.7;
    return React.createElement('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: kind === 'customer' ? 0 : 14
      }
    }, kind === 'customer' ? React.createElement('div', {
      style: {
        position: 'relative',
        height: size,
        display: 'inline-block',
        paddingRight: 28
      }
    }, React.createElement(Mark, {
      brand,
      variant,
      size
    }), React.createElement('span', {
      style: {
        position: 'absolute',
        right: 14,
        top: '21.8%',
        bottom: '2.5%',
        width: 1,
        backgroundColor: knockout ? 'rgba(255,255,255,.4)' : '#949494'
      }
    })) : React.createElement(Mark, {
      brand,
      variant,
      size
    }), kind === 'partner' && React.createElement('span', {
      style: {
        lineHeight: 1,
        color: knockout ? 'rgba(255,255,255,.6)' : '#949494',
        fontSize: partnerSize
      }
    }, '+'), partnerLogoSrc ? React.createElement('img', {
      src: partnerLogoSrc,
      alt: partnerLabel || 'partner',
      style: {
        height: partnerSize,
        display: 'block'
      }
    }) : React.createElement('span', {
      style: {
        font: 'var(--text-body-lg)',
        fontWeight: 600,
        color: knockout ? '#fff' : 'var(--text-secondary)',
        letterSpacing: '.01em'
      }
    }, partnerLabel));
  }
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, lockupText && React.createElement('span', {
    style: {
      font: 'var(--text-body-sm)',
      color: knockout ? '#fff' : 'var(--text-muted)',
      lineHeight: 1
    }
  }, lockupText), React.createElement(Mark, {
    brand,
    variant,
    size
  }));
}
Object.assign(__ds_scope, { LogoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LogoLockup.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
const tones = {
  error: ['var(--red-100)', 'var(--red-500)'],
  severe: ['var(--orange-100)', '#B45600'],
  warning: ['#FEF9E9', 'var(--yellow-700)'],
  success: ['#F0FDF0', '#0E8618'],
  info: ['var(--blue-100)', 'var(--blue-500)'],
  neutral: ['var(--gray-200)', 'var(--gray-700)'],
  cyan: ['#ECFBFD', '#007D98'],
  purple: ['var(--purple-100)', 'var(--purple-500)']
};
function Pill({
  tone = 'neutral',
  children
}) {
  const [bg, fg] = tones[tone];
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 10px',
      borderRadius: 'var(--radius-round)',
      background: bg,
      color: fg,
      font: 'var(--text-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
function Quote({
  size = 'md',
  quote,
  name,
  details
}) {
  const qFont = size === 'lg' ? 'var(--text-quote-lg)' : 'var(--text-quote-md)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      maxWidth: 640
    }
  }, React.createElement('p', {
    style: {
      font: qFont,
      fontFamily: 'var(--font-quote)',
      color: 'var(--text-primary)',
      margin: 0,
      position: 'relative'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      left: '-0.5em'
    }
  }, '\u201C'), quote, '\u201D'), (name || details) && React.createElement('div', null, name && React.createElement('div', {
    style: {
      font: 'var(--text-attribution-name)',
      letterSpacing: 'var(--ls-attribution-name)',
      color: 'var(--text-primary)'
    }
  }, name), details && React.createElement('div', {
    style: {
      font: 'var(--text-attribution-details)',
      letterSpacing: 'var(--ls-attribution-details)',
      color: 'var(--text-muted)'
    }
  }, details)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  level = 2
}) {
  const font = level === 1 ? 'var(--text-title-1)' : level === 2 ? 'var(--text-heading-2)' : level === 3 ? 'var(--text-heading-3)' : 'var(--text-heading-4)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, eyebrow && React.createElement('div', {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-primary)'
    }
  }, eyebrow), React.createElement('h2', {
    style: {
      font,
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCallout.jsx
try { (() => {
function StatCallout({
  value,
  label,
  tone = 'brand'
}) {
  const color = tone === 'brand' ? 'var(--brand-primary)' : tone === 'utest' ? 'var(--brand-utest)' : 'var(--text-primary)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, React.createElement('div', {
    style: {
      font: '800 3rem/1.1 var(--font-brand)',
      color
    }
  }, value), React.createElement('div', {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-muted)',
      lineHeight: '20px'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCallout.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LogoLockup = __ds_scope.LogoLockup;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatCallout = __ds_scope.StatCallout;

})();
