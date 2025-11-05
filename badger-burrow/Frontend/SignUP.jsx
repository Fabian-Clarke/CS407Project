import React, { useState } from 'react';

export default function SignUP() {
	const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
	const [message, setMessage] = useState('');

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.password) {
			setMessage('Please fill required fields.');
			return;
		}
		if (form.password !== form.confirm) {
			setMessage('Passwords do not match.');
			return;
		}
		setMessage('Signup submitted (demo).');
		console.log('Submitted', form);
	};

	return (
		<div style={styles.page}>
			<div style={styles.card}>
				<h2 style={styles.title}>Create account</h2>
				<form onSubmit={handleSubmit} style={styles.form}>
					<input
						name="name"
						placeholder="Full name"
						value={form.name}
						onChange={handleChange}
						style={styles.input}
					/>

					<input
						name="email"
						type="email"
						placeholder="Email"
						value={form.email}
						onChange={handleChange}
						style={styles.input}
					/>

					<input
						name="password"
						type="password"
						placeholder="Password"
						value={form.password}
						onChange={handleChange}
						style={styles.input}
					/>

					<input
						name="confirm"
						type="password"
						placeholder="Confirm password"
						value={form.confirm}
						onChange={handleChange}
						style={styles.input}
					/>

					<button type="submit" style={styles.button}>
						Sign up
					</button>

					{message && <div style={styles.message}>{message}</div>}
				</form>
			</div>
		</div>
	);
}

const styles = {
	page: {
		minHeight: '100vh',
		background: '#e53935', // red
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '24px',
		boxSizing: 'border-box'
	},
	card: {
		width: '100%',
		maxWidth: '420px',
		background: '#fff',
		borderRadius: '12px',
		padding: '28px',
		boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
		boxSizing: 'border-box'
	},
	title: { margin: 0, marginBottom: '12px', fontFamily: 'Arial, sans-serif', color: '#222' },
	form: { display: 'flex', flexDirection: 'column', gap: '12px' },
	input: {
		padding: '12px 14px',
		fontSize: '14px',
		borderRadius: '8px',
		border: '1px solid #ddd',
		outline: 'none'
	},
	button: {
		marginTop: '6px',
		padding: '12px 14px',
		borderRadius: '8px',
		border: 'none',
		background: '#e53935',
		color: '#fff',
		fontWeight: 600,
		cursor: 'pointer'
	},
	message: { marginTop: '10px', color: '#b00020', fontSize: '14px' }
};

