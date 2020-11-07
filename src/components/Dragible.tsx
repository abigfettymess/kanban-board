import React from 'react';
import styled from "@emotion/styled";

type Props = {
	children: React.ReactNode;
	draggable?: boolean;
}

const Layout = styled.div``;

const Dragible = ({ children, draggable = true }: Props) => {
	
	const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		console.log("drag");
		console.log(e);
	}
	return (
		<Layout
			draggable={draggable}
			onDragStart={onDragStart}
		>
			{children}
		</Layout>
	);
}

export default Dragible;
