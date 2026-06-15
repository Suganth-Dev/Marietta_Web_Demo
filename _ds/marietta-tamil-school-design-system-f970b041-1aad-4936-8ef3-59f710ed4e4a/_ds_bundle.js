/* @ds-bundle: {"format":3,"namespace":"MariettaTamilSchoolDesignSystem_f970b0","components":[{"name":"EventCard","sourcePath":"components/content/EventCard.jsx"},{"name":"PillarCard","sourcePath":"components/content/PillarCard.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"TeacherCard","sourcePath":"components/content/TeacherCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/content/EventCard.jsx":"73e0cdc983f7","components/content/PillarCard.jsx":"d11b18a7544a","components/content/StatCard.jsx":"47fb593aca4d","components/content/TeacherCard.jsx":"bc75915aae7f","components/core/Avatar.jsx":"968714c9632a","components/core/Badge.jsx":"c83b76451240","components/core/Button.jsx":"2c9fb6c59e80","components/core/Card.jsx":"e9d4c0109e36","components/forms/Checkbox.jsx":"f0b6abfc5976","components/forms/Input.jsx":"f22bc61f2d3d","components/forms/Select.jsx":"01c4a102b039","ui_kits/mobile/MobileApp.jsx":"9d843da5532d","ui_kits/website/About.jsx":"3186ff09276a","ui_kits/website/Events.jsx":"aecc1fc7b6ee","ui_kits/website/Footer.jsx":"92caa6ab82e4","ui_kits/website/Header.jsx":"21d3a249d039","ui_kits/website/Home.jsx":"7435242a419d","ui_kits/website/Teachers.jsx":"9fcf8fc8f0e2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MariettaTamilSchoolDesignSystem_f970b0 = window.MariettaTamilSchoolDesignSystem_f970b0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/PillarCard.jsx
try { (() => {
/**
 * PillarCard — one of the four brand pillars (Learn, Celebrate, Belong, Serve).
 */
function PillarCard({
  title,
  description,
  icon,
  tone = 'maroon',
  style
}) {
  const tones = {
    maroon: {
      wash: 'var(--surface-maroon-wash)',
      solid: 'var(--maroon-500)',
      ink: 'var(--maroon-700)',
      border: 'var(--maroon-100)'
    },
    gold: {
      wash: 'var(--surface-gold-wash)',
      solid: 'var(--gold-500)',
      ink: 'var(--gold-700)',
      border: 'var(--gold-100)'
    },
    sage: {
      wash: 'var(--surface-sage-wash)',
      solid: 'var(--sage-500)',
      ink: 'var(--sage-700)',
      border: 'var(--sage-100)'
    },
    neutral: {
      wash: 'var(--neutral-100)',
      solid: 'var(--neutral-800)',
      ink: 'var(--neutral-800)',
      border: 'var(--neutral-200)'
    }
  };
  const t = tones[tone] || tones.maroon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.wash,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '48px',
      borderRadius: 'var(--radius-md)',
      background: t.solid,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '20px',
      color: t.ink,
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
/**
 * StatCard — single headline metric of community impact.
 */
function StatCard({
  value,
  label,
  tone = 'maroon',
  style
}) {
  const tones = {
    maroon: 'var(--color-primary)',
    gold: 'var(--gold-600)',
    sage: 'var(--sage-600)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-3)',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: 1,
      color: tones[tone] || tones.maroon
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)',
      marginTop: '8px'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular person image with initials fallback.
 */
function Avatar({
  src,
  name = '',
  size = 44,
  tone = 'maroon',
  style,
  ...rest
}) {
  const tones = {
    maroon: ['var(--maroon-100)', 'var(--maroon-600)'],
    gold: ['var(--gold-100)', 'var(--gold-700)'],
    sage: ['var(--sage-100)', 'var(--sage-700)']
  };
  const [bg, fg] = tones[tone] || tones.maroon;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      color: fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: size * 0.38,
      overflow: 'hidden',
      flexShrink: 0,
      border: '2px solid #fff',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/TeacherCard.jsx
try { (() => {
/**
 * TeacherCard — teacher directory entry.
 */
function TeacherCard({
  name,
  role,
  grade,
  photo,
  tone = 'maroon',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '10px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: photo,
    tone: tone,
    size: 72
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '17px',
      color: 'var(--text-strong)'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, role)), grade && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '12px',
      color: 'var(--gold-700)',
      background: 'var(--gold-50)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px'
    }
  }, grade));
}
Object.assign(__ds_scope, { TeacherCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TeacherCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status / category label.
 */
function Badge({
  children,
  tone = 'maroon',
  variant = 'soft',
  style,
  ...rest
}) {
  const tones = {
    maroon: {
      soft: ['var(--maroon-50)', 'var(--maroon-600)'],
      solid: ['var(--maroon-500)', '#fff']
    },
    gold: {
      soft: ['var(--gold-50)', 'var(--gold-700)'],
      solid: ['var(--gold-400)', 'var(--charcoal)']
    },
    sage: {
      soft: ['var(--sage-50)', 'var(--sage-700)'],
      solid: ['var(--sage-400)', '#fff']
    },
    neutral: {
      soft: ['var(--neutral-100)', 'var(--neutral-700)'],
      solid: ['var(--neutral-700)', '#fff']
    },
    success: {
      soft: ['var(--success-soft)', 'var(--success)'],
      solid: ['var(--success)', '#fff']
    },
    warning: {
      soft: ['var(--warning-soft)', 'var(--warning)'],
      solid: ['var(--warning)', '#fff']
    },
    error: {
      soft: ['var(--error-soft)', 'var(--error)'],
      solid: ['var(--error)', '#fff']
    }
  };
  const [bg, fg] = (tones[tone] || tones.maroon)[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '12px',
      letterSpacing: '0.01em',
      lineHeight: 1.4,
      color: fg,
      background: bg,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/EventCard.jsx
try { (() => {
/**
 * EventCard — festival / community event with date chip and CTA.
 */
function EventCard({
  title,
  date,
  month,
  day,
  location,
  tag,
  tagTone = 'gold',
  image,
  onRegister,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '150px',
      background: image ? `center/cover no-repeat url(${image})` : 'linear-gradient(135deg, var(--maroon-400), var(--maroon-700))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '14px',
      left: '14px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: '6px 12px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-sm)',
      minWidth: '46px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: 1,
      color: 'var(--color-primary)'
    }
  }, day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '10px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, month)), tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '14px',
      right: '14px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tagTone,
    variant: "solid"
  }, tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '19px',
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      color: 'var(--text-muted)',
      fontSize: '14px'
    }
  }, date && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  })), date), location && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), location)), /*#__PURE__*/React.createElement("button", {
    onClick: onRegister,
    style: {
      marginTop: 'auto',
      alignSelf: 'flex-start',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '14px',
      color: 'var(--color-primary)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, "Register", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })))));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action for Marietta Tamil School.
 * Variants: primary (maroon), secondary (gold), sage, outline, ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  full = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px',
      radius: '999px',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '15px',
      radius: '999px',
      gap: '8px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '17px',
      radius: '999px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '1.5px solid transparent',
      shadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--color-secondary)',
      color: 'var(--charcoal)',
      border: '1.5px solid transparent',
      shadow: 'var(--shadow-sm)'
    },
    sage: {
      background: 'var(--sage-400)',
      color: '#fff',
      border: '1.5px solid transparent',
      shadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--maroon-300)',
      shadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid transparent',
      shadow: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: full ? '100%' : 'auto',
      padding: s.padding,
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      color: v.color,
      background: v.background,
      border: v.border,
      borderRadius: s.radius,
      boxShadow: v.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the foundational surface. Soft corners, subtle shadow.
 */
function Card({
  children,
  padding = 'var(--space-3)',
  interactive = false,
  tone = 'default',
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    ivory: {
      background: 'var(--surface-page)',
      border: '1px solid var(--border-subtle)'
    },
    maroon: {
      background: 'var(--surface-maroon-wash)',
      border: '1px solid var(--maroon-100)'
    },
    gold: {
      background: 'var(--surface-gold-wash)',
      border: '1px solid var(--gold-100)'
    },
    sage: {
      background: 'var(--surface-sage-wash)',
      border: '1px solid var(--sage-100)'
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.background,
      border: t.border,
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — labelled custom checkbox.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? 'cb-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: on,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '22px',
      height: '22px',
      borderRadius: '7px',
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)',
      flexShrink: 0
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field.
 */
function Input({
  label,
  hint,
  error,
  id,
  iconLeft,
  style,
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '14px',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14px',
      display: 'flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: iconLeft ? '12px 16px 12px 42px' : '12px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--error)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--error)' : 'var(--color-primary)';
      e.currentTarget.style.boxShadow = error ? '0 0 0 3px var(--error-soft)' : 'var(--ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? 'var(--error)' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — labelled native dropdown styled to match Input.
 */
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  children,
  ...rest
}) {
  const selId = id || (label ? 'sel-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '14px',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      padding: '12px 42px 12px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--color-primary)';
      e.currentTarget.style.boxShadow = 'var(--ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), children || options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '16px',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileApp.jsx
try { (() => {
// MobileApp.jsx — parent mobile app screens
const MobileNS = window.MariettaTamilSchoolDesignSystem_f970b0;
function MIcon({
  d,
  size = 22,
  stroke = 'currentColor',
  fill = 'none',
  sw = 2
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: stroke,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
}
const MI = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  gallery: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  chevron: '<polyline points="9 18 15 12 9 6"/>'
};
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '14px',
      color: 'var(--text-strong)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '6px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    d: "<path d=\"M2 20h.01M7 20v-4M12 20v-8M17 20V8\"/>",
    size: 15,
    sw: 2.4
  }), /*#__PURE__*/React.createElement(MIcon, {
    d: "<path d=\"M5 12.55a11 11 0 0 1 14 0M8.5 16.1a6 6 0 0 1 7 0M2 8.8a16 16 0 0 1 20 0M12 20h.01\"/>",
    size: 15,
    sw: 2.4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '22px',
      height: '12px',
      border: '1.5px solid var(--text-strong)',
      borderRadius: '3px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '1.5px',
      width: '70%',
      background: 'var(--text-strong)',
      borderRadius: '1px'
    }
  }))));
}
function HomeScreen() {
  const {
    Badge
  } = MobileNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)'
    }
  }, "Vanakkam,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '24px',
      color: 'var(--text-strong)'
    }
  }, "Anjali's family")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: 'var(--surface-maroon-wash)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    d: MI.bell,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '8px',
      right: '9px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'var(--gold-400)',
      border: '2px solid #fff'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      background: 'linear-gradient(150deg, var(--maroon-500), var(--maroon-700))',
      color: '#fff',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    variant: "solid"
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '21px',
      marginTop: '12px',
      lineHeight: 1.2
    }
  }, "Pongal Celebration"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--gold-100)',
      marginTop: '6px',
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    d: MI.cal,
    size: 14
  }), " Sat, Jan 17"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    d: MI.pin,
    size: 14
  }), " Campus"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginTop: '18px'
    }
  }, [['Homework', MI.book, 'var(--sage-500)', 'var(--surface-sage-wash)'], ['Calendar', MI.cal, 'var(--gold-600)', 'var(--surface-gold-wash)'], ['Gallery', MI.gallery, 'var(--maroon-500)', 'var(--surface-maroon-wash)'], ['Notices', MI.bell, 'var(--neutral-700)', 'var(--neutral-100)']].map(([label, d, color, bg]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      background: bg,
      borderRadius: 'var(--radius-md)',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    d: d,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '15px',
      color: 'var(--text-strong)'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '17px',
      color: 'var(--text-strong)',
      margin: '24px 0 12px'
    }
  }, "Recent updates"), [['Homework posted for Grade 3', '2h ago', 'var(--sage-400)'], ['Annual Day costume reminder', 'Yesterday', 'var(--gold-400)'], ['Class photos now in Gallery', '2 days ago', 'var(--maroon-400)']].map(([t, time, dot]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: dot,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, time)), /*#__PURE__*/React.createElement(MIcon, {
    d: MI.chevron,
    size: 18,
    stroke: "var(--text-muted)"
  }))));
}
function CalendarScreen() {
  const {
    Badge
  } = MobileNS;
  const days = Array.from({
    length: 31
  }, (_, i) => i + 1);
  const events = {
    17: 'gold',
    22: 'sage',
    14: 'maroon'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '24px',
      color: 'var(--text-strong)',
      margin: '6px 0 16px'
    }
  }, "January 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '4px',
      textAlign: 'center'
    }
  }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: '11px',
      fontWeight: 600,
      color: 'var(--text-muted)',
      padding: '4px 0'
    }
  }, d)), [null, null, null].map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: 'e' + i
  })), days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      aspectRatio: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: 500,
      background: events[d] ? `var(--surface-${events[d]}-wash)` : 'transparent',
      color: events[d] ? `var(--${events[d] === 'gold' ? 'gold-700' : events[d] + '-600'})` : 'var(--text-body)'
    }
  }, d, events[d] && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: `var(--${events[d] === 'gold' ? 'gold-400' : events[d] + '-400'})`,
      marginTop: '2px'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '17px',
      color: 'var(--text-strong)',
      margin: '22px 0 12px'
    }
  }, "Upcoming"), [['17', 'Pongal Celebration', 'Sat · 10am', 'gold'], ['22', 'Annual Day Rehearsal', 'Wed · 2pm', 'sage'], ['14', 'Tamil New Year Mela', 'next month', 'maroon']].map(([d, t, time, tone]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '12px',
      marginBottom: '10px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '46px',
      height: '46px',
      borderRadius: '12px',
      background: `var(--surface-${tone}-wash)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '18px',
      color: `var(--${tone === 'gold' ? 'gold-700' : tone + '-600'})`
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '15px',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, time)), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, "Event"))));
}
function GalleryScreen() {
  const tiles = ['var(--maroon-400)', 'var(--gold-400)', 'var(--sage-400)', 'var(--gold-500)', 'var(--sage-500)', 'var(--maroon-500)', 'var(--sage-400)', 'var(--maroon-400)', 'var(--gold-400)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '24px',
      color: 'var(--text-strong)',
      margin: '6px 0 4px'
    }
  }, "Gallery"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)',
      marginBottom: '16px'
    }
  }, "Pongal 2026 \xB7 42 photos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '6px'
    }
  }, tiles.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1',
      borderRadius: '12px',
      background: `linear-gradient(140deg, ${c}, color-mix(in srgb, ${c} 60%, #2B2B2B))`
    }
  }))));
}
function ResourcesScreen() {
  const items = [['Homework guidance', MI.book], ['School policies', MI.book], ['Safety information', MI.bell], ['Parent responsibilities', MI.home], ['Forms & registration', MI.cal]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '24px',
      color: 'var(--text-strong)',
      margin: '6px 0 16px'
    }
  }, "Resources"), items.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '16px',
      marginBottom: '10px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '11px',
      background: 'var(--surface-maroon-wash)',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    d: d,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '15px',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement(MIcon, {
    d: MI.chevron,
    size: 18,
    stroke: "var(--text-muted)"
  }))));
}
function TabBar({
  active,
  onTab
}) {
  const tabs = [['Home', MI.home], ['Calendar', MI.cal], ['Gallery', MI.gallery], ['Resources', MI.book]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: 'flex',
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(249,247,242,0.95)',
      backdropFilter: 'blur(8px)',
      padding: '8px 8px 22px'
    }
  }, tabs.map(([label, d]) => {
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onTab(label),
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: '6px 0',
        color: on ? 'var(--color-primary)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(MIcon, {
      d: d,
      size: 23,
      sw: on ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '11px'
      }
    }, label));
  }));
}
function MobileApp() {
  const [tab, setTab] = React.useState('Home');
  const screens = {
    Home: HomeScreen,
    Calendar: CalendarScreen,
    Gallery: GalleryScreen,
    Resources: ResourcesScreen
  };
  const Screen = screens[tab];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '390px',
      height: '800px',
      background: 'var(--surface-page)',
      borderRadius: '44px',
      border: '11px solid #1c1c1e',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Screen, null)), /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onTab: setTab
  }));
}
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
// About.jsx — mission / vision / values view
const AboutNS = window.MariettaTamilSchoolDesignSystem_f970b0;
function About() {
  const {
    Card,
    StatCard,
    Button
  } = AboutNS;
  const values = ['Heritage', 'Education', 'Community', 'Belonging', 'Service', 'Excellence'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--maroon-700)',
      color: 'var(--ivory)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '72px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '12px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Our story"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '46px',
      color: '#fff',
      margin: '16px 0 0',
      lineHeight: 1.1
    }
  }, "A weekend school becoming a ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--gold-300)'
    }
  }, "movement")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'var(--gold-100)',
      maxWidth: '620px',
      margin: '24px auto 0'
    }
  }, "Marietta Tamil School preserves Tamil language, culture, and identity while nurturing future generations through education, celebration, and shared experiences."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '56px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "maroon",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mts-eyebrow"
  }, "Mission"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      marginTop: '12px'
    }
  }, "To provide high-quality Tamil language education and cultural experiences that inspire children to develop a lifelong connection to their heritage.")), /*#__PURE__*/React.createElement(Card, {
    tone: "gold",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mts-eyebrow"
  }, "Vision"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      marginTop: '12px'
    }
  }, "A thriving community that preserves Tamil language and culture for future generations while fostering pride, belonging, and lifelong learning."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '8px 32px 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '30px',
      textAlign: 'center',
      marginBottom: '24px'
    }
  }, "Our values"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, values.map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '16px',
      padding: '12px 24px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)',
      color: 'var(--text-strong)'
    }
  }, v)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '40px 32px 16px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '28px'
    }
  }, "Become part of our family"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      color: 'var(--text-body)',
      margin: '12px 0 24px'
    }
  }, "Enroll your child or join us as a volunteer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Enroll your child"), /*#__PURE__*/React.createElement(Button, {
    variant: "sage",
    size: "lg"
  }, "Volunteer with us"))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Events.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Events.jsx — events listing with filter chips
const EventsNS = window.MariettaTamilSchoolDesignSystem_f970b0;
function Events() {
  const {
    EventCard,
    Badge
  } = EventsNS;
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Festival', 'Program', 'Community'];
  const events = [{
    day: '17',
    month: 'JAN',
    title: 'Pongal Celebration',
    date: 'Sat · 10am',
    location: 'Marietta Campus',
    tag: 'Festival',
    tagTone: 'gold',
    type: 'Festival'
  }, {
    day: '22',
    month: 'FEB',
    title: 'Annual Day Rehearsal',
    date: 'Sun · 2pm',
    location: 'Auditorium',
    tag: 'Program',
    tagTone: 'sage',
    type: 'Program'
  }, {
    day: '14',
    month: 'MAR',
    title: 'Tamil New Year Mela',
    date: 'Sat · 11am',
    location: 'Community Hall',
    tag: 'Festival',
    tagTone: 'gold',
    type: 'Festival'
  }, {
    day: '05',
    month: 'APR',
    title: 'Field Day & Picnic',
    date: 'Sat · 9am',
    location: 'Laurel Park',
    tag: 'Community',
    tagTone: 'maroon',
    type: 'Community'
  }, {
    day: '19',
    month: 'APR',
    title: 'Spring Assessments',
    date: 'Sat · 10am',
    location: 'All classrooms',
    tag: 'Program',
    tagTone: 'sage',
    type: 'Program'
  }, {
    day: '10',
    month: 'MAY',
    title: 'Volunteer Appreciation',
    date: 'Sat · 6pm',
    location: 'Community Hall',
    tag: 'Community',
    tagTone: 'maroon',
    type: 'Community'
  }];
  const shown = filter === 'All' ? events : events.filter(e => e.type === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mts-eyebrow"
  }, "Celebrate together"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '44px',
      marginTop: '10px'
    }
  }, "Events & festivals"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      color: 'var(--text-body)',
      maxWidth: '560px',
      marginTop: '12px'
    }
  }, "Throughout the year we gather to celebrate our culture, mark milestones, and grow as a community."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      margin: '28px 0 32px'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '14px',
      cursor: 'pointer',
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid ' + (filter === f ? 'transparent' : 'var(--border-default)'),
      background: filter === f ? 'var(--color-primary)' : 'transparent',
      color: filter === f ? '#fff' : 'var(--text-body)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, shown.map((e, i) => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: i
  }, e)))));
}
window.Events = Events;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx — sitemap + contact footer
function Footer() {
  const cols = [{
    h: 'Learn',
    items: ['Programs', 'Curriculum', 'Calendar', 'Assessments']
  }, {
    h: 'Community',
    items: ['Events', 'Gallery', 'Volunteer', 'Newsletter']
  }, {
    h: 'Families',
    items: ['Parents Corner', 'Resources', 'Policies', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--maroon-800)',
      color: 'var(--ivory)',
      marginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px 32px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.jpg",
    alt: "",
    width: "48",
    height: "48",
    style: {
      borderRadius: '12px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '18px',
      color: '#fff'
    }
  }, "Marietta Tamil School")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: '18px',
      color: 'var(--gold-200)',
      lineHeight: 1.4,
      margin: 0,
      maxWidth: '320px'
    }
  }, "Connecting generations through Tamil heritage.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '13px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      marginBottom: '14px'
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--maroon-100)',
      textDecoration: 'none',
      fontSize: '14px'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--maroon-700)',
      padding: '20px 32px',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '13px',
      color: 'var(--maroon-200)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Marietta Tamil School \xB7 Marietta, GA"), /*#__PURE__*/React.createElement("span", null, "Based on the International Tamil Academy curriculum")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Header.jsx — sticky translucent site header
const {
  Button
} = window.MariettaTamilSchoolDesignSystem_f970b0;
function Header({
  active,
  onNav
}) {
  const links = ['Home', 'Events', 'Teachers', 'About'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(249,247,242,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.jpg",
    alt: "Marietta Tamil School",
    width: "44",
    height: "44",
    style: {
      borderRadius: '12px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '17px',
      lineHeight: 1.1,
      color: 'var(--text-strong)'
    }
  }, "Marietta", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-muted)',
      fontSize: '14px'
    }
  }, "Tamil School"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '4px',
      marginLeft: '24px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l);
    },
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '15px',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      color: active === l ? 'var(--color-primary)' : 'var(--text-body)',
      background: active === l ? 'var(--surface-maroon-wash)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Enroll"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// Home.jsx — homepage view
const HomeNS = window.MariettaTamilSchoolDesignSystem_f970b0;
function Icon({
  d,
  size = 24
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
}
const ICONS = {
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
  hands: '<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'
};
function Home({
  onNav
}) {
  const {
    Button,
    PillarCard,
    StatCard,
    EventCard,
    Badge
  } = HomeNS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '64px 32px 32px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: '48px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mts-eyebrow",
    style: {
      marginBottom: '16px'
    }
  }, "Modern Heritage"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '56px',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Connecting generations through ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--color-primary)'
    }
  }, "Tamil heritage")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '24px 0 32px',
      maxWidth: '500px'
    }
  }, "More than a weekend language school \u2014 a community where families come together to learn, celebrate, belong, and serve."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Events')
  }, "Explore programs"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('About')
  }, "Our story"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '420px',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'linear-gradient(150deg, var(--maroon-400), var(--maroon-700) 70%)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.jpg",
    alt: "",
    width: "150",
    height: "150",
    style: {
      borderRadius: '50%',
      opacity: 0.96,
      boxShadow: '0 12px 40px rgba(0,0,0,0.3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      right: '20px',
      background: 'rgba(249,247,242,0.92)',
      backdropFilter: 'blur(8px)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '15px',
      color: 'var(--text-strong)'
    }
  }, "Preschool \u2192 High School"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, "International Tamil Academy curriculum")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '48px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mts-eyebrow"
  }, "What we stand for"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '38px',
      marginTop: '10px'
    }
  }, "Four pillars, one community")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(PillarCard, {
    tone: "maroon",
    title: "Learn",
    description: "Tamil language education from preschool through high school.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      d: ICONS.book
    })
  }), /*#__PURE__*/React.createElement(PillarCard, {
    tone: "gold",
    title: "Celebrate",
    description: "Festivals, Annual Day, and cultural traditions that keep heritage alive.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      d: ICONS.star
    })
  }), /*#__PURE__*/React.createElement(PillarCard, {
    tone: "sage",
    title: "Belong",
    description: "Strong family and community relationships across generations.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      d: ICONS.heart
    })
  }), /*#__PURE__*/React.createElement(PillarCard, {
    tone: "neutral",
    title: "Serve",
    description: "Volunteers and leaders giving back and strengthening the community.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      d: ICONS.hands
    })
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-maroon-wash)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "350+",
    label: "Students enrolled",
    tone: "maroon"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "40+",
    label: "Teachers & volunteers",
    tone: "gold"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "18",
    label: "Years of community",
    tone: "sage"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "12",
    label: "Cultural events a year",
    tone: "maroon"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mts-eyebrow"
  }, "Celebrate together"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '34px',
      marginTop: '10px'
    }
  }, "Upcoming events")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('Events')
  }, "View all events \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(EventCard, {
    day: "17",
    month: "JAN",
    title: "Pongal Celebration",
    date: "Sat \xB7 10am",
    location: "Marietta Campus",
    tag: "Festival",
    tagTone: "gold"
  }), /*#__PURE__*/React.createElement(EventCard, {
    day: "22",
    month: "FEB",
    title: "Annual Day Rehearsal",
    date: "Sun \xB7 2pm",
    location: "Auditorium",
    tag: "Program",
    tagTone: "sage"
  }), /*#__PURE__*/React.createElement(EventCard, {
    day: "14",
    month: "MAR",
    title: "Tamil New Year Mela",
    date: "Sat \xB7 11am",
    location: "Community Hall",
    tag: "Festival",
    tagTone: "gold"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '40px 32px 16px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    variant: "soft"
  }, "From a parent"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: '30px',
      lineHeight: 1.4,
      color: 'var(--color-primary)',
      margin: '20px 0 0'
    }
  }, "\"My daughter didn't just learn Tamil here \u2014 she found a community that feels like family.\"")));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Teachers.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Teachers.jsx — teacher directory + simple About block
const TeachersNS = window.MariettaTamilSchoolDesignSystem_f970b0;
function Teachers() {
  const {
    TeacherCard,
    Select
  } = TeachersNS;
  const teachers = [{
    name: 'Lakshmi Raman',
    role: 'Lead Teacher',
    grade: 'Preschool',
    tone: 'maroon'
  }, {
    name: 'Anand Subramaniam',
    role: 'Teacher',
    grade: 'Grade 1',
    tone: 'gold'
  }, {
    name: 'Priya Venkat',
    role: 'Teacher',
    grade: 'Grade 2',
    tone: 'sage'
  }, {
    name: 'Karthik Mohan',
    role: 'Teacher',
    grade: 'Grade 3',
    tone: 'maroon'
  }, {
    name: 'Deepa Nair',
    role: 'Lead Teacher',
    grade: 'Grade 4',
    tone: 'gold'
  }, {
    name: 'Suresh Bala',
    role: 'Teacher',
    grade: 'Grade 5',
    tone: 'sage'
  }, {
    name: 'Meena Krishnan',
    role: 'Teacher',
    grade: 'Middle School',
    tone: 'maroon'
  }, {
    name: 'Ravi Shankar',
    role: 'Coordinator',
    grade: 'High School',
    tone: 'gold'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mts-eyebrow"
  }, "Our teachers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '44px',
      marginTop: '10px'
    }
  }, "Meet the people who teach"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      color: 'var(--text-body)',
      maxWidth: '560px',
      marginTop: '12px'
    }
  }, "Dedicated teachers and volunteers guide every child, grade by grade.")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '220px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Filter by grade",
    options: ['All grades', 'Preschool', 'Elementary', 'Middle School', 'High School']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      marginTop: '36px'
    }
  }, teachers.map((t, i) => /*#__PURE__*/React.createElement(TeacherCard, _extends({
    key: i
  }, t)))));
}
window.Teachers = Teachers;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Teachers.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TeacherCard = __ds_scope.TeacherCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
