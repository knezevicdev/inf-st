<?php

/**
 * Template for the Heading Block view.
 *
 * @package Infinium
 */

use InfiniumVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('heading', $attributes));
