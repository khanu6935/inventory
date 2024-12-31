import * as Yup from "yup";

const phoneRegExp = /^\+?\d{10,13}$/;

// //////////////////////SignIn Schema////////////////////////////
const SignInSchema = Yup.object({
  username: Yup.string()
    .required("Email is Required")
    .email("Please Enter Valid Email"),
  password: Yup.string().required("Password is Required"),
});

// //////////////////////SignUp Schema////////////////////////////
const SignUpSchema = Yup.object({
  name: Yup.string().required("Enter Your Name"),

  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)_\-=+\{\}\[\]:"';?\/>,<\\|~`.])(?=.{8,})/,
      "The password must contain 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  isChecked: Yup.boolean().oneOf([true], "Checkbox Must be checked"),
  phoneNo: Yup.string()
    .required("Number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

// //////////////////////Forget Password Schema////////////////////////////
const forgetPasswordSchema = Yup.object({
  email: Yup.string()
    .required("Email is Required")
    .email("Please Enter Valid Email"),
});

// //////////////////////Step1 Schema////////////////////////////
const Step1Schema = Yup.object({
  supplier: Yup.string().required("Select any Supplier from DropDown"),
});
// //////////////////////Step2 Schema////////////////////////////
const Step2Schema = Yup.object({
  dealName: Yup.string().required("Deal Name is required"),
  lookupCode: Yup.string().required("lookupCode is required"),
  address1: Yup.string().required("Enter your Address"),
  address2: Yup.string().required("Mention Appartment , Suite"),
  city: Yup.string().required("Add City Name"),
  zipCode: Yup.string().required("Enter ZipCode"),
  country: Yup.string().required("Select Country"),
  state: Yup.string().required("Select State"),
});

const step2PartialSchema = Yup.object({
  dealName: Yup.string().required("Deal Name is required"),
  lookupCode: Yup.string().required("lookupCode is required"),
});

const getValidationSchema = (selectedValue: string) => {
  return selectedValue === "Yes" ? Step2Schema : step2PartialSchema;
};
// //////////////////////Step3 Schema////////////////////////////
const Step3Schema = Yup.object({
  interest: Yup.string().required("Add The Interest"),
  dequity: Yup.string().required("Select the D-Equity"),
  estimatedTime: Yup.string().required("Select the time line for investment"),
  earningToBePaid: Yup.string().required("Select the Earning to be paid"),
  date: Yup.string().required("Select the Date"),
});
// //////////////////////Step4 Schema////////////////////////////
const Step4Schema = Yup.object({
  raise: Yup.string().required("Add The amount to be raise"),
  closeDate: Yup.string().required("Select the Close Date"),
});
// //////////////////////Step5 Schema////////////////////////////
const Step5Schema = Yup.object({
  sampleDeal: Yup.string().required("Deal is Required"),
  lookUpDate: Yup.string().required("Please enter the lookUp Code"),
  supplier: Yup.string().required("Select the Supplier"),
  DEquity: Yup.string().required("Select the Asset class"),
  health: Yup.string().required("Select the Deal"),
  duration: Yup.string().required("Select the investment duration"),
  address: Yup.string().required("Enter the Addres"),
  city: Yup.string().required("Enter city name"),
});
// //////////////////////Add Supplier Schema//////////////
const SupplierSchema = Yup.object({
  name: Yup.string().required("Enter Supplier Name"),
  email: Yup.string()
    .required("Email is Required")
    .matches(
      /^[a-zA-Z0-9.,:;]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email"
    )
    .email("Please Enter Valid Email"),
  contactNumber: Yup.string()
    .required("Enter Supplier number")
    .max(13, "Not a valid phone number"),
  description: Yup.string().required("Enter Discription"),
});

// //////////////////////Update Profile Schema////////////////////////////
const MyProfileSchema = Yup.object({
  name: Yup.string()
    .required("Enter Your Name")
    .min(3, "The Name is to short")
    .max(20, "Not more then 20 characters"),
  phoneNo: Yup.string()
    .required("Number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

// ////////////////////Add Investor Schema//////////////////////////////////

const AddInvestorSchema = Yup.object({
  warehouseName: Yup.string()
    .required("Warehouse is Required")
});

// //////////////////////Update Profile Schema////////////////////////////
const UpdaetPasswordSchema = Yup.object({
  currentPassword: Yup.string().required("Enter Current Password"),

  newPassword: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)_\-=+\{\}\[\]:"';?\/>,<\\|~`.])(?=.{8,})/,
      "The password must contain 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .notOneOf(
      [Yup.ref("currentPassword")],
      "New password cannot be the same as the current password"
    ),
  confirmPass: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Password must Match")
    .required("confirm password required"),
});
const addInventorySchema = Yup.object({
  itemSize: Yup.string().required("Item size is required."),
  inStock: Yup.number()
    .min(1, "Items in stock must be greater than 0.")
    .required("Items in stock is required."),
  avlQty: Yup.number()
    .min(1, "Available quantity must be greater than 0.")
    .required("Available quantity is required."),
  inTransit: Yup.number()
    .min(1, "In transit quantity must be greater than 0.")
    .required("In transit quantity is required."),
  minOrderQuantity: Yup.number()
    .min(1, "Minimum order quantity must be greater than 0.")
    .required("Minimum order quantity is required."),
  quantityPerBox: Yup.number()
    .min(1, "Quantity per box must be greater than 0.")
    .required("Quantity per box is required."),
  reorderPoint: Yup.number()
    .min(1, "Reorder point must be greater than 0.")
    .required("Reorder point is required."),
});

const addItemSchema = Yup.object({
  itemName:Yup.string().required("Item Nmae is required")
})

export {
  SignInSchema,
  SignUpSchema,
  forgetPasswordSchema,
  Step1Schema,
  Step2Schema,
  Step3Schema,
  Step4Schema,
  Step5Schema,
  SupplierSchema,
  MyProfileSchema,
  getValidationSchema,
  AddInvestorSchema,
  UpdaetPasswordSchema,
  addInventorySchema,
  addItemSchema
};
