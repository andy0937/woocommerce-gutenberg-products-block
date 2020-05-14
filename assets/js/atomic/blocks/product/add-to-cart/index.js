/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { ProductVariationAttributePicker } from '@woocommerce/atomic-components/product';
import { Icon, cart } from '@woocommerce/icons';

/**
 * Internal dependencies
 */
import sharedConfig from '../shared-config';

const blockConfig = {
	title: __( 'Add to Cart Form', 'woo-gutenberg-products-block' ),
	description: __(
		'Displays an add to cart form for the product.',
		'woo-gutenberg-products-block'
	),
	icon: {
		src: <Icon srcElement={ cart } />,
		foreground: '#96588a',
	},
	supports: {
		html: false,
	},

	/**
	 * Renders the edit view for a block.
	 *
	 * @param {Object} props Props to pass to block.
	 */
	edit( props ) {
		const { product } = props.attributes;

		return <ProductVariationAttributePicker product={ product } />;
	},
};

registerBlockType( 'woocommerce/product-add-to-cart', {
	...sharedConfig,
	...blockConfig,
} );
