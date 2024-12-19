<?php

/**
 * Template for the Card Block.
 *
 * @package Infinium
 */

use InfiniumVendor\EightshiftLibs\Helpers\Components;

echo wp_kses_post(Components::render('card', $attributes));
