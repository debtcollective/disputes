export default {
  address: {
    type: "string",
    title: "Your Mailing Address"
  },
  birthday: {
    type: "string",
    title: "Date of Birth",
    format: "date"
  },
  city: {
    type: "string",
    title: "Your City"
  },
  email: {
    type: "string",
    title: "Email"
  },
  name: {
    type: "string",
    title: "Your Full Name"
  },
  ssn: {
    type: "string",
    title: "SSN"
  },
  state: {
    title: "Your State",
    $ref: "#/definitions/usa-states"
  },
  telephone: {
    type: "number",
    format: "telephone",
    title: "Your telephone"
  },
  telephoneAlt: {
    type: "number",
    format: "telephone",
    title: "Your telephone (alt.)"
  },
  "zip-code": {
    title: "Your Zip Code",
    type: "string",
    pattern: "[0-9]{5}"
  }
};
