#git clone https://github.com/silkwormgrim/silkwormgrim.github.io.git
#====================================================================#
#====================================================================#

#path_source = /home/raito/projects/absinthe/projects/minetest_dom/
#path_destination = /home/raito/.minetest/games/
#path_game = /home/raito/.minetest/games/minetest_dom/
#path_root = /home/raito/projects/

default_target: main
.SILENT:

main : 
	git add -A
	git commit -m "automated from makefile"
	git push
