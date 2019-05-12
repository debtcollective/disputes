export default {
  address: {
    title: "Your Mailing Address",
    type: "string",
  },
  birthday: {
    format: "date",
    title: "Date of Birth",
    type: "string",
  },
  city: {
    title: "Your City",
    type: "string",
  },
  email: {
    title: "Email",
    type: "string",
  },
  name: {
    title: "Your Full Name",
    type: "string",
  },
  ssn: {
    title: "SSN",
    type: "string",
  },
  state: {
    $ref: "#/definitions/usa-states",
    title: "Your State",
  },
  telephone: {
    $format: "telephone",
    title: "Your telephone",
    type: "number",
  },
  telephoneAlt: {
    $format: "telephone",
    title: "Your telephone (alt.)",
    type: "number",
  },
  "zip-code": {
    pattern: "[0-9]{5}",
    title: "Your Zip Code",
    type: "string",
  },
};
