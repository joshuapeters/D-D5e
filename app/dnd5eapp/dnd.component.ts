import { Component } from '@angular/core';

@Component({
	selector: 'dnd-app',
	template: `
		<nav class="navbar navbar-default">
			<div class="navbar-header">
				<a class="navbar-brand" href="encounter">Random Encounter Generator </a>
			</div>
			<div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
				<ul class="nav navbar-nav">
					<li>
						<a href="spells"> Spell list </a>
					</li>
				</ul>
				<ul class="nav navbar-nav">
					<li>
						<a href="manual"> Monsters </a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container-fluid">
			<h1>D&D 5e Encounter Generator</h1>
			<router-outlet></router-outlet>
		</div>
	`
})

export class DndComponent{
	title= "D&D 5e encounter generator"
}
