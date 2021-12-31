<script setup>
import { ref, watch } from 'vue';
import * as yup from 'yup';
import SummaryIcon from '@/components/icons/summary.vue';
import DescriptionIcon from '@/components/icons/description.vue';
import TimeIcon from '@/components/icons/time.vue';
import { DatePicker } from 'v-calendar';
import moment from 'moment';
import { useStore } from 'vuex';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { CREATE_TASK, UPDATE_TASK } from '@/store/actions.types';

const props = defineProps({
	task: Object,
});

const emit = defineEmits(['closeModal', 'request']);
const date = ref();
const hasSubmitTriggered = ref(false);

const initialTaskState = {
	description: '',
	due_at: '',
	status: 'incomplete',
	title: '',
};
const taskData = ref(initialTaskState);
const showModal = ref(false);
const store = useStore();

watch(props, (newProps, prevProps) => {
	if (props.task && props.task.due_at) {
		taskData.value = props.task;
		showModal.value = true;
		date.value = new Date(taskData.value.due_at);
	}
});

watch(date, (task, prevprops) => {
	taskData.value.due_at = moment(date.value).format('yyyy-MM-DD HH:mm:ss');
});

let body = document.querySelector('body');

const toggleModal = (e) => {
	if (
		e === 'form-submission' ||
		(e && showModal.value && e.target.getAttribute('data-event'))
	) {
		if (typeof e !== 'string') e.stopPropagation();
		body.classList.remove('modal-open');
		showModal.value = false;
		taskData.value = initialTaskState;
		emit('closeModal');
	} else {
		body.classList.add('modal-open');
		showModal.value = true;
	}
};

const handleTask = (e) => {
	if (props.task) {
		store.dispatch(UPDATE_TASK, taskData.value).then(() => {
			toggleModal('form-submission');
			emit('request', 'updateTask');
		});
	} else {
		store.dispatch(CREATE_TASK, taskData.value).then(() => {
			toggleModal('form-submission');
			emit('request', 'createTask');
		});
	}
};

const schema = yup.object({
	title: yup.string().required(),
	description: yup.string().required(),
	date: yup.string().required(),
});
</script>

<template>
	<div>
		<div class="check-in">
			<a href="" @click.prevent="toggleModal" class="fz-18 fw-bold text-gray">
				+ Add new task
			</a>
		</div>
		<transition name="slide">
			<div
				class="modal d-block"
				data-event="close-modal"
				v-if="showModal"
				tabindex="-1"
				@click="toggleModal"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<h3 class="fz-20 fw-600">New Task</h3>
						<div class="modal-body">
							<Form
								class="login-form"
								@submit="handleTask"
								:validation-schema="schema"
								autocomplete="nope"
							>
								<div class="form-field-lg">
									<div class="field-icon">
										<SummaryIcon />
									</div>
									<Field
										type="text"
										v-model="taskData.title"
										class="form-control border-darker fz-16 fw-500"
										name="title"
										placeholder="Summary"
										autocomplete="off"
									/>
									<ErrorMessage v-if="hasSubmitTriggered" name="title" />
								</div>
								<div class="form-field-lg">
									<div class="field-icon">
										<DescriptionIcon />
									</div>
									<Field
										type="textarea"
										as="textarea"
										v-model="taskData.description"
										class="form-control border-darker fz-16 fw-500"
										border-darker
										fz-16
										fw-500
										name="description"
										placeholder="Description"
										autocomplete="off"
									/>
									<ErrorMessage v-if="hasSubmitTriggered" name="description" />
								</div>
								<div class="form-field-lg">
									<div class="field-icon">
										<TimeIcon />
									</div>
									<!-- :min-date="new Date()" -->
									<DatePicker
										v-model="date"
										mode="dateTime"
										:popover="{ placement: 'top-start' }"
										:is-required="true"
									>
										<template v-slot="{ inputValue, inputEvents }">
											<input
												class="form-control border-darker fz-16 fw-500"
												:value="inputValue"
												v-on="inputEvents"
												placeholder="Due date"
											/>
										</template>
									</DatePicker>
									<Field type="hidden" v-model="taskData.due_at" name="date" />
									<ErrorMessage v-if="hasSubmitTriggered" name="date" />
								</div>
								<div class="task-footer">
									<div class="d-flex justify-content-center mb-2">
										<button
											type="submit"
											@click="hasSubmitTriggered = true"
											class="btn modal-btn btn-primary btn-pill"
										>
											Save changes
										</button>
									</div>
									<div class="d-flex justify-content-center">
										<button
											@click="toggleModal"
											data-event="close-modal"
											type="button"
											class="btn modal-btn btn-default btn-pill"
										>
											Cancel
										</button>
									</div>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<transition name="fade">
			<div class="modal-backdrop d-block" v-if="showModal"></div>
		</transition>
	</div>
</template>
<style lang="scss">
.modal {
	.modal-dialog {
		width: 765px;
		max-width: 96%;
	}
	.modal-content {
		border: none;
		border-radius: 0.5rem;
		padding: 4rem 3rem;
		box-shadow: 0 0 20px rgba(38, 36, 131, 0.25);
	}
	&-btn {
		width: 348px;
		max-width: 96%;
	}
}

.form-field-lg {
	position: relative;
	margin-bottom: 1rem;

	.field-icon {
		position: absolute;
		left: 0;
		top: 0.5rem;
	}
	.form-control {
		border: 0;
		background: transparent;
		box-shadow: none;
		outline: none;
		border-bottom: 1px solid;
		border-radius: 0;
		padding: 0.5rem 1rem 1.5rem 2rem;
		height: auto;
		box-shadow: none !important;
	}
}
.modal-open {
	overflow: hidden;
	padding-right: 17px;
}
</style>
