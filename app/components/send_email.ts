"use server";
import { Resend } from 'resend';
import { toast } from 'react-toastify';

const resend = new Resend('re_5hzKnh9E_CeSdwC8THJRMi9j51Q8VVwGt');

const validateString = (value : unknown) => {
    if(!value || typeof value !== "string"){
        return false
    }
    return true;
}

export const SendData = async (formData: FormData) => {
    const SenderEmail = formData.get("SenderEmail");
    const Message = formData.get("Message");
    if( !validateString(SenderEmail) ){
        return {
            error: "Invalid Email",
        }
    } 
    if( !validateString(Message) ){
        return {
            error: "Invalid Message Format",
        }
    }
    try{
        await resend.emails.send({
            from: 'Nishant Sharma <onboarding@resend.dev>',
            to: 'nishant19072003@gmail.com',
            subject: "Contact",
            text: Message as string,
            reply_to: SenderEmail as string,
        });
        return {
            message: "Email sent successfully"
        }
    }catch(error : unknown){
        return {
            error: "Sorry server error"
        }
    }  
};