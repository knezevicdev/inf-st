<?php

/**
 * Template for the Lists Block view.
 *
 * @package Infinium
 */

use InfiniumVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('lists', $attributes));
