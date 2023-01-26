# Lesson Index For the First Exercise in freeCodeCamp's Responsive Web Design Course

The following references in freeCodeCamp's Responsive Web Design course explain basic aspects of HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets).

## Basics

[HTML tags](https://www.freecodecamp.org/learn/2022/responsive-web-design/) give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.

[HTML elements](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1) have *opening tags* like `<h1>` and *closing tags* like `</h1>`.

The text for an element goes between its opening and closing tags.

### Headings `<h1>`

The `h1` through `h6` [heading elements](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2) are used to signify the importance of content below them. The lower the number, the higher the importance, so `h2` elements have less importance than `h1` elements. Only use one `h1` element per page and place lower importance headings below higher importance headings.

### Paragraphs `<p>`

The [`p` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-3) is used to create a paragraph of text on websites.

### Commenting

[Commenting](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-4) allows you to leave messages without affecting the browser display. It also allows you to make code inactive. A comment in HTML starts with `<!--, contains any number of lines of text, and ends with -->`. For example, the comment `<!-- TODO: Remove h1 -->` contains the text TODO: Remove `h1`.

### HTML5

[HTML5](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-5) has some elements that identify different content areas. These elements make your HTML easier to read and help with Search Engine Optimization (SEO) and accessibility.

Identify the main section of a page by adding a `<main>` opening tag before the first element of the page's content and a `</main>` closing tag after the final content element.

In this way the content is inside the `main` element. This is called [nesting](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-6). Nested elements should be placed two spaces further to the right of the element they are nested in. This spacing is called [indentation](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-6) and it is used to make HTML easier to read.

### Images `<img>`

You can add [images](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-7) to your website by using the `img` element. `img` elements have an opening tag without a closing tag. A tag for an element without a closing tag is known as a self-closing tag.

### Attributes

HTML [attributes](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-8) are special words used inside the opening tag of an element to control the element's behavior. The `src` attribute in an `img` element specifies the image's URL (where the image is located). An example of an `img` element using an src attribute: `<img src="https://www.example.com/the-image.jpg">`.

All `img` elements should have an [`alt` attribute](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-9). The alt attribute's text is used for screen readers to improve accessibility and is displayed if the image fails to load. For example, `<img src="cat.jpg" alt="A cat">` has an alt attribute with the text "A cat".

### Links `<a>`

You can link to another page with the [anchor `a` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-10). For example, `<a href='https://freecodecamp.org'></a>` would link to freecodecamp.org.

A [link's text](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-11) must be placed between the opening and closing tags of an anchor `a` element. For example, `<a href="https://www.freecodecamp.org">click here to go to freeCodeCamp.org</a>` is a link with the text click here to go to freeCodeCamp.org.

You can surround words [inside](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-12) in another element with anchor tags and turn them into a link. You can also turn an [image into a link](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-15) by surrounding it with anchor tags.

Add a [`target` attribute](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-14) with the value `_blank` to the anchor `a` element's opening tag, so that the link opens in a new tab.

### Sections `<section>`

Separate segments of content by surrounding each in a [`section` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-16).

When you add a lower rank heading element to the page, it's implied that you're starting a new [subsection](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-19).

### Unordered Lists `<ul>`

Unordered lists, such as bulleted lists, are surrounded by [`ul` elements](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-20).

Each individual list item is surrouned by [`li` elements](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/Usestep-21) to create items in a list. Here is an example of list items in an unordered list:

```
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

### Figures `<figure>`

The [`figure` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-23) represents self-contained content and will allow you to associate an image with a caption.

A [`figcaption` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-24) is used to add a caption to describe the image contained within the figure element. For example, `<figcaption>A cute cat</figcaption>` adds the caption A cute cat.

### Emphasis `<em>`

Emphasize the word love in the figcaption element by wrapping it in an emphasis [em element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-25).

### Ordered Lists `<ol>`

The code for an [ordered list](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-27) `ol` is similar to an unordered list, but list items in an ordered list are numbered when displayed.

### Importance `<strong>`

The [`strong` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-32) is used to indicate that some text is of strong importance or urgent.

### Body `<body>`

All page content elements that should be rendered to the page go inside the body element.

## Forms

Data is submitted by means of a [`form` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-36). The `action` attribute indicates where form data should be sent. For example, `<form action="/submit-url"></form>` tells the browser that the form data should be sent to the path `/submit-url`.

### [Input `<input>`](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-37)

The `input` element allows you several ways to collect data from a web form. Like `img` elements, input elements are self-closing and do not need closing tags.

There are many [kinds of inputs](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-38) you can create using the type attribute. You can easily create a password field, reset button, or a control to let users select a file from their computer.

##### Attribute: `name`

In order for a form's data to be accessed by the location specified in the action attribute, you must give the text field a [`name` attribute](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-39) and assign it a value to represent the data being submitted. For example, you could use the following syntax for an email address text field: `<input type="text" name="email">`.

##### Attribute: `placeholder`

[Placeholder text](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-40) is used to give people a hint about what kind of information to enter into an input. For example, `<input type="text" placeholder="Email address">`.

##### Attribute: `required`

To prevent a user from submitting your form when required information is missing, you need to add the [`required` attribute](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-41) to an input element. There's no need to set a value to the required attribute. Instead, just add the word required to the input element, making sure there is space between it and other attributes.

#### Buttons

Use the [`button` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-42) to create a clickable button. For example, `<button>Click Here</button>` creates a button with the text "Click Here".

Both input and button elements are inline elements, which don't appear on new lines.

A button in a form will submit the form by default. However, relying on default behavior may cause confusion, so it's best practice to add the [`type` attribute with the value "submit" to the button](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-43) to make it clear that it is a submit button.

#### Radio Buttons

You can use [radio buttons](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-44) for questions where you want only one answer out of multiple options.

Here is an example of a radio button with the option of cat: `<input type="radio">` cat. Remember that input elements are self-closing.

Multiple radio buttons can be selected at the same time. To make it so selecting one radio button automatically deselects the other, [all buttons in a group must have a `name` attribute](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-48) with the same value.

#### Labels

`label` elements are used to help [associate the text for an input element with the input element itself](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-45) (especially for assistive technologies like screen readers). For example, `<label><input type="radio"> cat</label>` makes it so clicking the word cat also selects the corresponding radio button.

##### Attribute: `id`

The `id` attribute is used to [identify specific HTML elements](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-46). Each `id` attribute's value must be unique from all other id values for the entire page.

##### Attribute: `value`

If you select a radio button and submit the form, the form data for the button is based on its name and `value` attributes. Add a `value` attribute to [define data that should be submitted](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-49) for each radio button.

#### Fieldsets

The `fieldset` element is used to [group related inputs and labels together in a web form](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-50). `fieldset` elements are block-level elements, meaning that they appear on a new line.

The `legend` element acts as [a caption for the content in the `fieldset` element](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-51). It gives users context about what they should enter into that part of the form.

#### Checkboxes 

Forms commonly use [checkboxes for questions that may have more than one answer](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-54). For example, here's a checkbox with the option of tacos: `<input type="checkbox">` tacos.

While you won't notice this in the browser, adding a `name` attribute to each checkbox `input` element makes it [easier for a server to process your web form](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-57), especially when there are several checkboxes.

Like radio buttons, form data for selected checkboxes are `name` / `value` attribute pairs. While the `value` attribute is optional, it's [best practice to include it with any checkboxes or radio buttons on the page](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-60).

#### Attribute: `for`

There's [another way to associate an `input` element's text with the element itself](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-56). You can nest the text within a `label` element and add a `for` attribute with the same value as the input element's `id` attribute.

#### Attribute: `checked`

In order to [make a checkbox checked or radio button selected by default](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-61), you need to add the checked attribute to it. There's no need to set a value to the checked attribute. Instead, just add the word checked to the input element, making sure there is space between it and other attributes.

## Meta data

### Head `<head>`

All page content elements that should be rendered to the page go inside the `body` element. However, [other important information](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-65) goes inside the `head` element.

### Page Title `<title>`

The `title` element [determines what browsers show in the title bar or tab for the page](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-66).

### Language

Within the opening `<html>` tag, the `lang` attribute with the value "en" to [specifies that the language of the page](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-67) is English.

### Document declaration

All pages should begin with <!DOCTYPE html>. This special string is known as a declaration and [ensures the browser tries to meet industry-wide specifications](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-68).

### Meta Elements

You can [set browser behavior](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-69) by adding self-closing `meta` elements in the head. Here's an example:

```
<meta attribute="value">
```

