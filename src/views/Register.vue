<template>
	<div>
		<img
			className="w-full absolute h-[700px] object-cover "
			alt="Candy"
			src="../assets/photos/Login.png"
		/>

		<div
			class="relative top-[100px] right-0 left-0 h-full items-center justify-center flex"
		>
			<div class="relative p-4 w-full max-w-md h-full md:h-auto">
				<div class="relative bg-transparent rounded-lg shadow-2xl">
					<div class="p-5">
						<h3 class="text-2xl mb-0.5 font-medium"></h3>
						<p class="mb-4 text-sm font-normal text-gray-800"></p>

						<div class="text-center">
							<p class="mb-3 text-2xl font-semibold leading-5 text-secondary">
								Sign up to your account
							</p>
							<p class="mt-2 text-sm leading-4 text-slate-600">
								You must be logged in to perform this action.
							</p>
						</div>

						<div class="mt-7 flex flex-col gap-2">
							<button
								@click="signinwithGoogle"
								class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1"
							>
								<img
									src="https://www.svgrepo.com/show/475656/google-color.svg"
									alt="Google"
									class="h-[18px] w-[18px]"
								/>Continue with Google
							</button>
						</div>

						<div
							class="flex w-full items-center gap-2 py-6 text-sm text-slate-600"
						>
							<div class="h-px w-full bg-slate-200"></div>
							OR
							<div class="h-px w-full bg-slate-200"></div>
						</div>

						<form
							class="w-full"
							form
							@submit.prevent="signInWithEmailAndPassword"
						>
							<label for="username" class="sr-only">Name</label>
							<input
								name="username"
								type="text"
								required="true"
								v-model="username"
								class="block w-full rounded-lg border border-gray-300 mb-2 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-secondary focus:ring-offset-1"
								placeholder="User Name"
								value=""
							/>
							<label for="email" class="sr-only">Email address</label>
							<input
								name="email"
								type="email"
								required="true"
								v-model="email"
								class="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-secondary focus:ring-offset-1"
								placeholder="Email Address"
								value=""
							/>
							<label for="password" class="sr-only">Password</label>
							<input
								name="password"
								type="password"
								required="true"
								v-model="password"
								class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-secondary focus:ring-offset-1"
								placeholder="Password"
								value=""
							/>
							<p class="mb-3 mt-2 text-sm text-gray-500"></p>
							<button
								@click="CreateUserWithEmailAndPassword"
								class="inline-flex w-full items-center justify-center rounded-lg bg-primary hover:bg-secondary p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
							>
								Continue
							</button>
							<p v-if="message">{{ message }}</p>
						</form>

						<div class="mt-6 text-center text-sm text-slate-600">
							Already have an account?
							<a href="/signin" class="font-medium text-secondary">Sign In</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {
	getAuth,
	updateProfile,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider
} from 'firebase/auth'
export default {
	name: 'Signup',
	data() {
		return {
			email: '',
			password: '',
			message: '',
			username: ''
		}
	},
	methods: {
		async CreateUserWithEmailAndPassword() {
			const auth = getAuth()
			try {
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					this.email,
					this.password
				)
				const user = userCredential.user
				await updateProfile(user, {
					displayName: this.username
				})

				this.message = 'Register in with email successful'
				console.log(auth.currentUser)
				this.$router.push('/')
			} catch (err) {
				console.error(err)
				this.message = err
			}
		},
		async signinwithGoogle() {
			const auth = getAuth()
			try {
				const provider = new GoogleAuthProvider()
				await signInWithPopup(auth, provider)
				this.message = 'Sign in with Google successfull'
				this.$router.push('/')
			} catch (error) {
				console.error(error)
				this.message = 'Sign in with Google failed'
			}
		}
	}
}
</script>
