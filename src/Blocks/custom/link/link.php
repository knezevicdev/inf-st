<?php

/**
 * Template for the Link Block view.
 *
 * @package Infinium
 */

use InfiniumVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('link', $attributes));
