module.exports = {
  eleventy_variable: {
    template: "eleventy_liquid_shortcode_positional_args",
    inline: true,
    preview: {
      text: "Variable",
      subtext: [
        { template: "variables.{variable}" },
        "Use a variable"
      ],
      icon: "data_object"
    },
    definitions: {
      shortcode_name: "variable",
      positional_args: [
        {
          editor_key: "key",
          type: "string"
        },
        {
          editor_key: "capitalize",
          type: "boolean",
          optional: true,
          implied_boolean: true
        }
      ]
    },
    _inputs: {
      key: {
        type: "select",
        label: "Name",
        options: {
          values: "data.variables",
          preview: {
            text: [
              { key: "en" }
            ]
          }
        }
      },
      capitalize: {
        type: "switch"
      }
    }
  }
}