<?php

/**
 * Display footer
 *
 * @package Infinium
 */

use InfiniumVendor\EightshiftLibs\Helpers\Components;

?>

</main>

<?php
echo wp_kses_post(
	Components::render(
		'layout-three-columns',
		[
			'selectorClass' => 'footer',
			'layoutLeft' => Components::render(
				'copyright',
				[
					'copyrightBy' => esc_html__('Eightshift', 'infinium'),
					'copyrightYear' => gmdate('Y'),
					'copyrightContent' => esc_html__('Made with 🧡  by Eightshift team', 'infinium'),
				]
			),
			'layoutRight' => Components::render(
				'menu',
				[
					'variation' => 'horizontal'
				]
			),
		]
	)
);

wp_footer();
?>
</body>
</html>
