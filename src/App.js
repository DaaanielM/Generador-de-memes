// import logo from './logo.svg';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';

function App() {
	const [linea1, setLinea1] = useState('');
	const [linea2, setLinea2] = useState('');
	const [imagen, setImagen] = useState('');

	const changeLinea1 = (evento) => {
		setLinea1(evento.target.value);
	};
	const changeLinea2 = (evento) => {
		setLinea2(evento.target.value);
	};
	const changeImagen = (evento) => {
		setImagen(evento.target.value);
	};
	const exportar = (evento) => {
		html2canvas(document.querySelector('#meme')).then((canvas) => {
			let img = canvas.toDataURL('image/png');

			var link = document.createElement('a');
			link.download = 'meme.png';
			link.href = img;
			link.click();
		});
	};
	return (
		<div className='App'>
			<select onChange={changeImagen}>
				<option value='fire'>Casa en llamas</option>
				<option value='futurama'>Futurama</option>
				<option value='history'>History channel</option>
				<option value='matrix'>Matrix</option>
				<option value='philosoraptor'>Philosoraptor</option>
				<option value='smart'>Smart guy</option>
			</select>{' '}
			<br />
			<input
				onChange={changeLinea1}
				type='text'
				placeholder='Linea 1'
			/>{' '}
			<br />
			<input
				onChange={changeLinea2}
				type='text'
				placeholder='Linea 2'
			/>{' '}
			<br />
			<button className='boton' onClick={exportar}>
				Exportar
			</button>
			<div className='meme' id='meme'>
				<span className='span1'>{linea1}</span> <br />
				<span className='span2'>{linea2}</span>
				<img src={'/memes/' + imagen + '.jpg'} alt='' />
			</div>
		</div>
	);
}

export default App;
