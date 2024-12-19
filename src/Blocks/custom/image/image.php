<?php

/**
 * Template for the Image Block view.
 *
 * @package Infinium
 */

use InfiniumVendor\EightshiftLibs\Helpers\Components;

echo wp_kses_post(Components::render('image', $attributes));
