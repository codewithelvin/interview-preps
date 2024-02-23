### CSS Specificity

**CSS specificity** is a set of rules that determines <u>**which CSS rules are applied to an element when multiple conflicting CSS rules target the same element**</u>. It is important to understand CSS specificity to ensure that styles are applied as intended. Here's a brief overview of CSS specificity:

1. **Inline Styles**: Inline styles have the **highest specificity** and will **always override** styles defined in external stylesheets or internal `<style>` blocks. They are applied directly to an HTML element using the `style` attribute.

```html
<div style="color: red;">This text will be red</div>
```

2. **ID Selectors**: ID selectors have a higher specificity than class selectors and element selectors. They are denoted by a `#` followed by the ID attribute value.

```css
#myElement {
    color: blue;
}
```

3. **Class Selectors**, **Attribute Selectors**, and **Pseudo-Classes**: Class selectors, attribute selectors, and pseudo-classes have a *lower specificity* than ID selectors but *higher* than element selectors. They are denoted by a `.` for classes, `[]` for attributes, and `:` for pseudo-classes.

```css
.myClass {
    font-size: 16px;
}

[type="button"] {
    background-color: yellow;
}

a:hover {
    text-decoration: underline;
}
```

4. **Element Selectors** and **Pseudo-Elements**: Element selectors and pseudo-elements have the *lowest* specificity. They target all instances of the specified element or pseudo-element.

```css
p {
    font-family: Arial, sans-serif;
}

p::first-letter {
    font-size: 24px;
}
```

**Specificity Calculation**: When multiple conflicting CSS rules target the same element, the specificity of each selector is calculated. The rule with the highest specificity is applied.

* The specificity of an element selector or pseudo-element is 1 (0,0,0,1).
* The specificity of a class selector, attribute selector, or pseudo-class is 10 (0,0,1,0).
* The specificity of an ID selector is 100 (0,1,0,0).
* Inline styles have a specificity of 1000 (1,0,0,0).

If two selectors have* the same specificity*, **the one that comes later** in the CSS file is applied (assuming no **!important** declarations are present).

Understanding CSS specificity is crucial for writing maintainable and predictable CSS code. It helps to avoid unexpected style overrides and ensures that styles are applied as intended.