import { useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { getUser, insertUser, updateUser } from "@/api/users"
import { AgeField, NameField, PasswordField, RoleField, UsernameField } from "./fields"
import { nameValidations, ageValidators, usernameValidators, passwordValidators, roleValidators } from "./validators"

export function InsertUserForm() {
    const form = useForm({
        defaultValues: { name: '', age: '', username: '', password: '', role: '' },
        onSubmit: async ({ value }) => { return insertUser(value) },
        validatorAdapter: zodValidator
    })

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
        }} >
            <div className="grid w-full items-center gap-4">
                {/* NAME */}
                <form.Field
                    name="name"
                    validators={nameValidations}
                    children={(field) =>
                        <NameField field={field} placeholder='John' />
                    }
                />

                {/* AGE */}
                <form.Field
                    name="age"
                    validators={ageValidators}
                    children={(field) =>
                        <AgeField field={field} placeholder='18' />
                    }
                />

                {/* USERNAME */}
                <form.Field
                    name="username"
                    validators={usernameValidators}
                    children={(field) =>
                        <UsernameField field={field} placeholder='johndoe' />
                    }
                />

                {/* PASSWORD */}
                <form.Field
                    name="password"
                    validators={passwordValidators}
                    children={(field) =>
                        <PasswordField field={field} placeholder='****' />
                    }
                />

                {/* ROLE */}
                <form.Field
                    name="role"
                    validators={roleValidators}
                    children={(field) => <RoleField field={field} />}
                />
            </div>
            <div className="flex mt-10 justify-between">
                <Button variant="outline">Cancelar</Button>
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                        <Button type="submit" size="sm" disabled={!canSubmit}>
                            {isSubmitting ? '...' : 'Aceptar'}
                        </Button>
                    )}
                />
            </div>
        </form >
    )
}


export function UpdateUserForm({ id }: { id: number }) {
    const { data } = useQuery({
        queryKey: [id, 'user'],
        queryFn: async () => getUser(id)
    })

    const form = useForm({
        defaultValues: { name: "", age: "", username: "", password: "", role: "" },
        onSubmit: async ({ value }) => { return updateUser(id, value) },
        validatorAdapter: zodValidator
    })

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
        }} >
            <div className="grid w-full items-center gap-4">
                {/* NAME */}
                <form.Field
                    name="name"
                    validators={nameValidations}
                    children={(field) =>
                        <NameField field={field} placeholder={data?.name ?? 'John'} />
                    }
                />

                {/* AGE */}
                <form.Field
                    name="age"
                    validators={ageValidators}
                    children={(field) =>
                        <AgeField field={field} placeholder={data?.age.toString() ?? '18'} />
                    }
                />

                {/* USERNAME */}
                <form.Field
                    name="username"
                    validators={usernameValidators}
                    children={(field) =>
                        <UsernameField field={field} placeholder={data?.username ?? 'johndoe'} />
                    }
                />

                {/* PASSWORD */}
                <form.Field
                    name="password"
                    validators={passwordValidators}
                    children={(field) =>
                        <PasswordField field={field} placeholder='****' />
                    }
                />

                {/* ROLE */}
                <form.Field
                    name="role"
                    validators={roleValidators}
                    children={(field) => <RoleField field={field} />}
                />
            </div>
            <div className="flex mt-10 justify-between">
                <Button variant="outline">Cancelar</Button>
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                        <Button type="submit" size="sm" disabled={!canSubmit}>
                            {isSubmitting ? '...' : 'Aceptar'}
                        </Button>
                    )}
                />
            </div>
        </form >
    )
}



