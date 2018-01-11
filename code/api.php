<?php
/**
 * Created by PhpStorm.
 * User: trunghn
 * Date: 1/8/18
 * Time: 5:34 PM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
function generateRandomString($length = 10) {
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$charactersLength = strlen($characters);
	$randomString = '';
	for ($i = 0; $i < $length; $i++) {
		$randomString .= $characters[rand(0, $charactersLength - 1)];
	}
	return $randomString;
}
$out = [];
for ($i = 1 ; $i<6;$i++){
	$hero = new stdClass();
	$hero->id = $i;
	$hero->name = generateRandomString(random_int(5,10));
	$hero->class = generateRandomString(2);
	$out[] = $hero;
}
unset($i);
echo json_encode($out);