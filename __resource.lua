resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'
author 'LuaDeveloper'
description 'Door Lock'
server_scripts {
	'@es_extended/locale.lua',
	'locales/gr.lua',
	'config.lua',
	'server/main.lua'
}
client_scripts {
	'@es_extended/locale.lua',
	'locales/gr.lua',
	'config.lua',
	'client/main.lua'
}
dependency 'es_extended'
ui_page('ui/ui.html')
files {
    'ui/ui.html',
    'ui/numField.css',
	'ui/numField.js',
	'ui/numField.mp3',
	'ui/numField.png'
}