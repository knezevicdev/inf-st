<?php

/**
 * Template for the Paragraph Block view.
 *
 * @package Infinium
 */

use InfiniumVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('paragraph', $attributes));
