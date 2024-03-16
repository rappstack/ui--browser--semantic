import { browser_ctx__ensure } from '@rappstack/domain--browser/ctx'
import { type id_ref_T } from '@rappstack/domain--server/jsonld'
import { be_sig_triple_, calling, memo_, type memo_T } from 'ctx-core/rmemo'
import { MultiUndirectedGraph } from 'graphology'
import { type Thing } from 'schema-dts'
import { Sigma } from 'sigma'
const [
	,
	url_,
	url__set,
] = be_sig_triple_<string|undefined>(()=>undefined)
export function url__input__hyop(url__input:HTMLInputElement) {
	const ctx = browser_ctx__ensure()
	url__input.addEventListener('input', evt=>{
		const target = <HTMLInputElement>evt.target
		url__set(ctx, target.value)
	})
}
export function sigma_container__hyop(_sigma_container:HTMLElement) {
	const ctx = browser_ctx__ensure()
	const sigma_container = <HTMLElement&{ $:memo_T<unknown> }>_sigma_container
	sigma_container.$ = calling(memo_(()=>{
		const url = url_(ctx)
		if (!url) {
			sigma_container.innerHTML = ''
			return
		}
		fetch(url)
			.then(response=>response.text())
			.then(html=>graph__render(html))
			.catch(err=>{
				console.error(err)
			})
	}))
	// TODO: complete
	function graph__render(html:string) {
		const parser = new DOMParser()
		const doc = parser.parseFromString(html, 'text/html')
		const graph = new MultiUndirectedGraph<graph_attributes_T, graph_attributes_T, graph_attributes_T>()
		const jsonld_a1 = <
			({ '@id'?:string, title?:string }&Thing)[]
			>Array.from(doc.querySelectorAll('script[type="application/ld+json"]'))
				.map(script=>JSON.parse(script.innerHTML))
		const edge_a2 = <[source_id:string, dest_id:string][]>[]
		for (const jsonld of jsonld_a1) {
			const id = jsonld?.['@id']
			graph.addNode({
				id,
				label: jsonld?.title,
			})
			edge_a2__maybe_push(id, jsonld)
		}
		new Sigma(graph, sigma_container,)
		function edge_a2__maybe_push(
			source_id?:string,
			dest?:id_ref_T|({ '@id'?:string, title?:string }&Thing)
		) {
			const dest_id = dest?.['@id']
			if (source_id && dest_id) {
				edge_a2.push([source_id, dest_id])
			}
		}
	}
}
type graph_attributes_T = {
	nodes:node_T[]
	edges:edge_T[]
}
type node_T = {
	id:string
	label?:string
	x?:number
	y?:number
	size?:number
	color?:string
}
type edge_T = {
	id:string
	source:string
	target:string
	color?:string
	type?:'line'|'curve'
	size?:number
}
