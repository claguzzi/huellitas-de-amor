import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@nextui-org/react";
import styles from "./AgregarMascota.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addMascota, limpiarImagenes } from "../../redux/actions";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SubirImagenes from "../SubirImagenes/SubirImagenes";

const validationSchema = Yup.object().shape({
	nombre: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(50, "Debe poseer máximo 50 caracteres")
		.required("Campo requerido"),
	especie: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(50, "Debe poseer máximo 50 caracteres")
		.required("Campo requerido"),
	edad: Yup.number("La edad debe ser un número positivo")
		.min(0, "La edad debe ser mayor o igual a 0")
		.required("Campo requerido")
		.positive()
		.integer("La edad debe ser un número positivo"),
	tamano: Yup.string().required("Campo requerido"),
	peso: Yup.number()
		.min(1, "El peso debe ser mayor o igual a 0")
		.required("Campo requerido"),
	descripcion: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")

		.required("Campo requerido"),
	/* foto: Yup.string()

		.url("Debe ser una URL válida")
		.required("Campo requerido"), */
	raza: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(50, "Debe poseer máximo 50 caracteres")
		.required("Campo requerido"),
	sexo: Yup.string().required("Campo requerido"),
});
const AgregarMascota = () => {
	const [mascota, setMascota] = useState({
		nombre: "",
		especie: "",
		edad: 0,
		tamano: "",
		peso: 0,
		descripcion: "",
		foto: [],
		raza: "",
		sexo: "",
	});

	const dispatch = useDispatch();
	const Navigate = useNavigate()
	const imagenes = useSelector((state) => state.imagenes)

	const handleSubmit = (mascota) => {
		const nuevaMascota = { ...mascota };
  		nuevaMascota.foto = [...nuevaMascota.foto, ...imagenes];
		/* console.log(nuevaMascota.foto) */
  		dispatch(addMascota(nuevaMascota));
		/* dispatch(addMascota(mascota)); */
		dispatch(limpiarImagenes())
		localStorage.removeItem("formData");
		  Swal.fire({
				tittle: "MASCOTA AGREGADA",
				text: "La mascota se ha agregado satisfactoriamente",
				icon: "success",
				buttons: "OK",
			});
			Navigate("/Home");
	};

	const handleFormChange = (values) => {
		localStorage.setItem("formData", JSON.stringify(values));
	};

	const storedData = localStorage.getItem("formData");

	const tamañoOptions = ["Pequeño", "Mediano", "Grande"];
	return (
		<div className={styles.formContainer}>
			<Formik
				initialValues={storedData ? JSON.parse(storedData) : mascota}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{({ isSubmitting, errors, values }) => (
					<div className={styles.form}>
						{setMascota(values)}
						<Form onChange={() => handleFormChange(values)}>
							<div className={styles.tittle}>
								<h1>Agrega una nueva mascota</h1>
							</div>
							<div>
								<FormInput
									label='Nombre'
									name='nombre'
									placeholder='Nombre'
									error={errors.nombre}
								/>
							</div>
							{console.log(localStorage)}
							<div>
								<FormInput
									label='Especie'
									name='especie'
									error={errors.especie}
									placeholder='Especie'
								/>
							</div>
							<div>
								<FormInput
									label='Edad'
									placeholder='Edad'
									name='edad'
									error={errors.edad}
								/>
							</div>
							<div>
								<FormInput
									label='Peso'
									placeholder='Peso'
									name='peso'
									error={errors.peso}
								/>
							</div>
							{/* <div>
								<FormInput label='Foto' name='foto' error={errors.foto} />
							</div> */}
							<div>
								<FormInput
									label='Raza'
									placeholder='Raza'
									name='raza'
									error={errors.raza}
								/>
							</div>
							<div>
								<FormTextarea
									label='Descripción'
									name='descripcion'
									placeholder='Descripción'
									error={errors.descripcion}
								/>
							</div>

							<div className={styles.selectContainer}>
								<div
									className={
										errors.tamano ? styles.selectRed : styles.selectGreen
									}>
									{/* <div className='relative w-full inline-flex shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background !duration-150 group-data-[focus=true]:border-danger transition-colors motion-reduce:transition-none h-14 py-2 is-filled'> */}
									<div>
										{/* <label
											className='block font-medium  dark:text-danger-500 text-tiny will-change-auto origin-top-left transition-all !duration-200 !ease-[cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none
							w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small' */}
										{/* htmlFor='tamano'>
											Tamaño:
										</label> */}
										<Field
											className='relative w-full inline-flex shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 min-h-unit-10 rounded-medium flex-col items-start  justify-center gap-0 transition-background !duration-150 group-data-[focus=true]:border-danger transition-colors motion-reduce:transition-none h-14 py-2 is-filled text-medium'
											as='select'
											label='Tamaño'
											variant='bordered'
											id='tamano'
											name='tamano'
											placeholder='Tamaño'
											errorMessage={
												<ErrorMessage name='tamano' component='div' />
											}
											// validationState={validationSchema}
										>
											<option value=''>Tamaño</option>
											{tamañoOptions.map((option) => (
												<option
													className='w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small'
													key={option}
													value={option}>
													{option}
												</option>
											))}
										</Field>
									</div>
									<ErrorMessage
										className='text-tiny text-danger'
										name='tamano'
										component='div'
									/>
								</div>
								<div
									className={
										errors.sexo ? styles.selectRed : styles.selectGreen
									}>
									<div>
										{/* <label
											className='block font-medium 
										
										 dark:text-danger-500 text-tiny will-change-auto origin-top-left transition-all !duration-200 !ease-[cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none'
											htmlFor='tamano'>
											Sexo:
										</label> */}
										<Field
											className='relative w-full inline-flex shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background !duration-150 group-data-[focus=true]:border-danger transition-colors motion-reduce:transition-none h-14 py-2 is-filled font-large'
											// label='Sexo'
											as='select'
											id='sexo'
											name='sexo'>
											<option value=''>Sexo</option>
											<option value='Macho'>Macho</option>
											<option value='Hembra'>Hembra</option>
										</Field>
									</div>
									<ErrorMessage
										className='text-tiny text-danger'
										name='sexo'
										component='div'
									/>
								</div>
							</div>
							<div>
                 <SubirImagenes setImagenes={(imagenes) => setMascota({ ...mascota, foto: imagenes })}/>
								{console.log(imagenes)}
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
								{imagenes &&
									imagenes.map((imag) => {
										return (
											<img src={imag} alt='' className='h-[80px] m-[15px]' />
										);
									})}
							</div>
							<div className={styles.button}>
								<Button
									type='submit'
									color='primary'
									disabled={isSubmitting}
									size='lg'>
									Enviar
								</Button>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default AgregarMascota;
