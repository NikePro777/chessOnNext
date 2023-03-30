import Router from 'next/router'
import React from 'react'

export default function About() {
	const linkClickHandler = () => {
		Router.push('/')
	}

	return (
		<>
			{' '}
			<h1>about</h1>
			<button onClick={linkClickHandler}>Go back to home</button>
			<button onClick={() => Router.push('/')}>HOME</button>
		</>
	)
}
