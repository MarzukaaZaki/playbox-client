import React from 'react';
import { useForm } from "react-hook-form";
const UpdateModal = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div>
            
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className='text-2xl font-bold text-center mb-4'>Update Toy Information</h1>
                { /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form className='w-full border rounded p-5'>
                   



                    

                  



                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder='Price' type='number' {...register("price", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />






                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder='Description' type='text' {...register("description", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}


                    <br />






                    {/* register your input into the hook by invoking the "register" function */}
                    <select placeholder='Quantity' defaultValue='' {...register("quantity", { required: true })} className='border rounded p-2 mx-2 my-2'>
                    <option value="" disabled hidden>Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}


                    <br />



                    <input className='btn bg-purple-500 border-collapse mt-3' type="submit" value="Add Toy" />
                </form>
                    <div className="modal-action">
                        <label htmlFor="update-modal" className="btn">Done!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;