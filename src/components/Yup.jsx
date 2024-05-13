import * as yup from "yup"

export const messageSchema=yup.object({
    name:yup.string().required("name is required").min(2).trim(),
    email:yup.string().required("email is required").trim().email(),
    message:yup.string().required("message is required").min(10).trim(),
})