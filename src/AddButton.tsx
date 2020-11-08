import React from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';

type Props = {
	onClick?: () => void;
};

const AddButton = ({ onClick }: Props) => (
	<button
		onClick={() => {
			if (onClick) {
				onClick();
			}
		}}
		css={{
		}}>
		&#43;
	</button>
);

export default AddButton;
