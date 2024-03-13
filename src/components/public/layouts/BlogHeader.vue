<template>
	<ElHeader class="h-4 w-full">
		<ElMenu>
			<ElMenuItem class="user-info">
				<ElAvatar
				class="mr-4"
				 src="/src/assets/img/Dy.bmp"/>
				<h1>{{ userName }}</h1>
			</ElMenuItem>
			<div class="flex-grow"></div>
			<template class="nav">
				<ElMenuItem v-for="(cates, index) in priorCategories">
					<RouterLink :to="cates.link">
						{{cates.description}}
					</RouterLink>
				</ElMenuItem>
				<ElMenuItem v-for="(cates, index) in hideCategories">
					<RouterLink :to="cates.link">
						{{ cates.description }}
					</RouterLink>
				</ElMenuItem>
			</template>
		</ElMenu>
	</ElHeader>
</template>

<script lang="ts" setup>

type Category = {
	link: string
	description: string
}

export type headerProps = {
	userName: string
	categories: Category[]
}

const props = withDefaults(defineProps<headerProps>(),{
	userName: "Dy镝",
	categories: () => [
		{link: '/class1', description: '类1'},
		{link: "/class2", description: "类2"},
		{link: "/class3", description: "类3"},
		{link: "/class4", description: "类4"},
		{link: "/class5", description: "类5"},
		{link: "/class6", description: "类6"},
	],
})


const priorCategories = ref<Category[]>(props.categories.slice(0, 2))
const hideCategories = ref<Category[]>(props.categories.slice(3))


</script>

