<?php

$aliases['staging'] = array(
	'uri'=> 'staging.communitylivingsarnia.org',
	'root' => '/home/clsl/subdomains/staging/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'clsl',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
);

$aliases['live'] = array(
	'uri'=> 'communitylivingsarnia.org',
	'root' => '/home/clsl/subdomains/live/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'clsl',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
);
