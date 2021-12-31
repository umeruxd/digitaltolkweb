<script setup>
import * as yup from 'yup';
import { computed, reactive, ref } from '@vue/reactivity';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { LOGIN, SHOW_TOAST } from '@/store/actions.types';
import { watch } from '@vue/runtime-core';
import UserIcon from '@/assets/images/user.svg';

const store = useStore();
const router = useRouter();
const user = reactive({ email: '', password: '' });
let passwordHandle = ref({
	type: 'password',
	text: 'Show',
});
let hasSubmitTriggered = ref(false);
const isAuth = computed(() => store.getters.isAuthenticated);

watch(isAuth, (isAuth, previsAuth) => {
	if (isAuth) {
		store.dispatch(SHOW_TOAST, {
			duration: 5,
			toastHeading: 'Welcome',
			toastCopy: 'you are now logged in',
			icon: UserIcon,
		});
		router.replace('/tasks');
	}
});

const onSubmit = () => {
	store.dispatch(LOGIN, user);
};
const togglePassword = () => {
	if (passwordHandle.value.type == 'password') {
		passwordHandle.value.type = 'text';
		passwordHandle.value.text = 'Hide';
	} else {
		passwordHandle.value.type = 'password';
		passwordHandle.value.text = 'Show';
	}
};
const schema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});
</script>

<template>
	<div class="container-fluid">
		<div class="d-flex vh-100 align-items-center justify-content-center">
			<div class="login-page mx-auto">
				<h1 class="heading mb-5 text-center">Log In</h1>
				<Form
					class="login-form"
					@submit="onSubmit"
					:validation-schema="schema"
					autocomplete="nope"
				>
					<div class="form-field mb-3">
						<Field
							type="email"
							v-model="user.email"
							class="form-control"
							name="email"
							placeholder="Email"
							autocomplete="off"
						/>
						<ErrorMessage v-if="hasSubmitTriggered" name="email" />
					</div>
					<div class="form-field mb-3 position-relative">
						<Field
							:type="passwordHandle.type"
							v-model="user.password"
							class="form-control"
							name="password"
							placeholder="Password"
							autocomplete="off"
						/>
						<ErrorMessage v-if="hasSubmitTriggered" name="password" />
						<span class="show-password" @click.prevent="togglePassword">{{
							passwordHandle.text
						}}</span>
					</div>
					<button
						@click="hasSubmitTriggered = true"
						class="btn btn-primary btn-pill w-100 login-submit"
					>
						Submit
					</button>
				</Form>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '@/assets/scss/login.scss';
</style>
