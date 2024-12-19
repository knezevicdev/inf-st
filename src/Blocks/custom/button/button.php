<?php

/**
 * Template for the Button Block view.
 *
 * @package Infinium
 */

use InfiniumVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('button', $attributes));
