<template>
    <div class="relative min-h-screen">
        <router-view v-slot="{ Component, route }">
            <div :key="route.name">
                <Component :is="Component" />
            </div>
        </router-view>
    </div>
</template>