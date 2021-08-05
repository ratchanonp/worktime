<template>
	<div>
		<p
			v-if="location == null"
			class="
				text-4xl
				bg-white
				border-2
				p-5
				rounded-xl
				text-red-500 text-center
				font-bold
			"
		>
			ยังไม่ได้บันทึก
		</p>
		<div v-else class="flex flex-col md:flex-row rounded-xl border-2 p-5">
			<!-- Date -->
			<div class="w-full md:w-1/2">
				<p
					v-if="weekDay == 'จันทร์'"
					class="text-4xl text-yellow-300 font-bold"
				>
					{{ weekDay }}
				</p>
				<p
					v-else-if="weekDay == 'อังคาร'"
					class="text-4xl text-pink-300 font-bold"
				>
					{{ weekDay }}
				</p>
				<p
					v-else-if="weekDay == 'พุธ'"
					class="text-4xl text-green-300 font-bold"
				>
					{{ weekDay }}
				</p>
				<p
					v-else-if="weekDay == 'พฤหัสบดี'"
					class="text-4xl text-yellow-600 font-bold"
				>
					{{ weekDay }}
				</p>
				<p
					v-else-if="weekDay == 'ศุกร์'"
					class="text-4xl text-blue-300 font-bold"
				>
					{{ weekDay }}
				</p>
				<p
					v-else-if="weekDay == 'เสาร์'"
					class="text-4xl text-violet-300 font-bold"
				>
					{{ weekDay }}
				</p>
				<p
					v-else-if="weekDay == 'อาทิตย์'"
					class="text-4xl text-red-300 font-bold"
				>
					{{ weekDay }}
				</p>
				<p class="text-gray-500">
					{{ $moment.unix(date).format("DD/MM/YYYY") }}
				</p>
				<p class="text-gray-500 text-sm">{{ location }}</p>
			</div>
			<!-- CheckIn -->
			<div class="flex flex-col md:flex-row w-full md:w-1/2">
				<div
					class="
						w-1/2
						flex flex-row
						md:flex-col
						text-right
						align-middle
						text-xl
						md:text-3xl
						items-center
					"
				>
					
					<font-awesome-icon icon="sign-in-alt" class="text-green-600 mr-3 md:mr-0 md:mb-3" />
					
					<p class="text-gray-500">
						{{
							checkIn != null
								? $moment.unix(checkIn).format("HH:mm:ss")
								: "ไม่มีข้อมูล"
						}}
					</p>
				</div>
				<!-- CheckOut -->
				<div
					class="
						w-1/2
						flex flex-row
						md:flex-col
						text-right
						align-middle
						text-xl
						md:text-3xl
						items-center
					"
				>
					
						<font-awesome-icon icon="sign-out-alt" class="text-red-600 mr-3 md:mr-0 md:mb-3"/>
					
					<p class="text-gray-500">
						{{
							checkOut != null
								? $moment.unix(checkOut).format("HH:mm:ss")
								: "ไม่มีข้อมูล"
						}}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from "moment";
moment().format();
moment.locale("th");
export default {
	props: {
		date: {
			type: String,
			default: null,
		},
		location: {
			type: String,
			default: null,
		},
		checkIn: {
			type: String,
			default: null,
		},
		checkOut: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			weekDay: moment.unix(this.date).format("dddd"),
		};
	},
};
</script>
