import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
    subject: Yup.string().required('Subject is required'),
});

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            subject: ''
        },
    });

    const { reset, handleSubmit } = methods;

    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // const payload = {
            //     name: data.name,
            //     email: data.email,
            //     message: data.message,
            //     subject: data.subject,
            // };
            reset();
            toast.success("Message sent successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                        <NameInput />
                        <EmailInput />
                        <SubjectInput />
                    </div>
                    <div className="col-span-12 md:col-span-6 ">
                        <MessageInput />
                    </div>
                </div>
                <div className='mt-6'>
                    <button
                        type="submit"
                        className={`bg-blue1/30 sm:w-auto w-full flex items-center justify-center backdrop-blur-md border-[3px] rounded-full cursor-pointer border-cyan1/30 shadow-lg btn_home px-[20px] py-[3px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <div className="loader mr-2" />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};


const NameInput = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className=''>
            <label className='input_lable mb-1 text-cyan1' htmlFor="name">
                Full Name <span className='font-medium text-white/95'>*</span>
            </label>
            <input className='input_box 
                bg-blue1/10 py-2 
                px-3 text-white/95 rounded-xl backdrop-blur-sm border-[3px] border-white/50 shadow-lg
                 w-full' type="text" id="name" {...register('name')} />
            {errors.name && <p className='text-red-500 mt-1 paragraph'>{errors.name.message}</p>}
        </div>
    );
};

const EmailInput = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='my-[1.2rem]'>
            <label className='input_lable mb-1 text-cyan1' htmlFor="email">
                Email Address <span className='font-medium text-white/95'>*</span>
            </label>
            <input className='input_box 
                bg-blue1/10 py-2 
                px-3 text-white/95 rounded-xl backdrop-blur-sm border-[3px] border-white/50 shadow-lg
                 w-full' type="email" id="email" {...register('email')} />
            {errors.email && <p className='text-red-500 mt-1 paragraph'>{errors.email.message}</p>}
        </div>
    );
};

const SubjectInput = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div>
            <label className='input_lable mb-1 text-cyan1' htmlFor="subject">
                Subject <span className='font-medium text-white/95'>*</span>
            </label>
            <input className='input_box 
                bg-blue1/10 py-2 
                px-3 text-white/95 rounded-xl backdrop-blur-sm border-[3px] border-white/50 shadow-lg
                 w-full' type="text" id="subject" {...register('subject')} />
            {errors.subject && <p className='text-red-500 mt-1 paragraph'>{errors.subject.message}</p>}
        </div>
    );
};

const MessageInput = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className=''>
            <label className='input_lable mb-1 text-cyan1' htmlFor="message">
                Your Message <span className='font-medium text-white/95'>*</span>
            </label>
            <textarea
                rows="9"
                className='input_box 
                bg-blue1/10 py-2 
                px-3 text-white/95 rounded-xl backdrop-blur-sm border-[3px] border-white/50 shadow-lg
                 w-full'
                id="message" {...register('message')}
            />
            {errors.message && <p className='text-red-500 mt-1 paragraph'>{errors.message.message}</p>}
        </div>
    );
};


export default ContactForm;
