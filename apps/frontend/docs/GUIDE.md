# Table of Content

- [Forms](#forms)
  - [Advance Customization](#advance-customization)
  - [Custom Formats](#custom-formats)
  - [Factories](#factories)
    - [yesno](#yesno)
  - [Dependencies](#dependencies)

# Forms

## Advance Customization

As we are using the [Mozilla's project](https://react-jsonschema-form.readthedocs.io/en/latest/) to handle forms all the rules intended to ddeclare schemas will apply, further help related to it can be found within their [advanced customization guide](https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/)

## Custom Formats

While [JSON Schema](https://json-schema.org/understanding-json-schema/reference/string.html#format) supports just certain formats we also need to handle things like _telephone_ and _currency_ in order to do so we have custom formating.

Our `<TextField />` component supports an special keyword in their schema called `$format` in which we can specify `telephone` and `currency`. In order for that to happen the schema needs to be of type `number`.

```js
{
  phone: {
    $format: "telephone",
    title: "Your telephone",
    type: "number",
  },
}
```

Take a look to the code at its [test suite](https://github.com/debtcollective/disputes/blob/master/apps/frontend/components/___tests___/TextField.spec.js) for some more context.

## Factories

While we enforce being explicit over abstractions there are some exceptions to facilitate the way of a developer create the schemas. There are common cases that needs a lot of boilerplate to define certain behaviour in which some factories take place.

### yesno

This factory is used on the cases where there are yes/no questions that need to be answered and typically one of the answers will lead to a branch within the form _(an extra of questions to be filled)_. Typically the usage can be described as the example below:

```js
"test-group": yesnoSchema({
  defaultValue: false,
  keyName: "test",
  title: "Are you sure about this?",
  yesProps: {
    "test-why": {
      title: "Why you were sure?",
      type: "string",
    },
  },
}),
```

The example above will return a JSON Schema that renders a question of _"Are you sure about this?"_ with two possible answers `yes` and `no`. By default will be selected the `No`, since `defaultValue` is `false` _(if defaultValue is not set `false` will be its value)_. If the user clicks on `Yes` it will render an extra question of _"Why you were sure?"_.

## Dependencies

We use some custom libraries to render some of our Material Components on top of [Marterial UI](https://material-ui.com/)
- [react-number-format](https://github.com/s-yadav/react-number-format)
- [material-ui-time-picker](https://github.com/TeamWertarbyte/material-ui-time-picker)