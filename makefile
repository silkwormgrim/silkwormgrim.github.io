#variables

path_source = /home/raito/projects/absinthe/projects/minetest_dom/
path_destination = /home/raito/.minetest/games/
path_game = /home/raito/.minetest/games/minetest_dom/
path_root = /home/raito/projects/

#makefile

default_target: main
.SILENT:

main : 
	cp -r $(path_source) $(path_destination)
	echo "Copied files: $(path_source) to $(path_destination)"
	minetest --quiet

clean : 
	rm -rf $(path_game)
	echo "Removed files: $(path_game)"
	cp -r $(path_source) $(path_destination)
	echo "Copied files: $(path_source) to $(path_destination)"
	ls $(path_destination)
	minetest --quiet

clone : 
	cp -r $(path_game) $(path_root)
	echo "Copied files in reverse: $(path_game) to $(path_root)"
