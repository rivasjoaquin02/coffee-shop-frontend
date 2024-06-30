import { Link, createFileRoute, useSearch } from '@tanstack/react-router'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { z } from 'zod'
import { Searchbar } from '@/components/searchbar'
// shadcn
import { Button } from '@/components/ui/button'
import { ArrowDown01Icon, ArrowDownAzIcon, ArrowUpZAIcon, ArrowUpZaIcon, ChevronDownIcon, FilterIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { getProducts } from '@/api/products'
import { queryClient } from '@/main'
import { ProductCard, Stars } from '@/components/product-card'


const searchSchema = z.object({
    filter: z.string().catch("").optional(),
    sort: z.enum(["newest", "oldest", "price"]).catch("newest"),
    limit: z.number().optional()
})

export type Search = z.infer<typeof searchSchema>

const productsOptions = (deps: Search) => queryOptions({
    queryKey: [deps, 'products'],
    queryFn: () => getProducts(deps)
})

export const Route = createFileRoute('/store/')({
    component: StorePage,
    validateSearch: searchSchema,
    loaderDeps: ({ search }) => search,
    loader: ({ deps }) => queryClient.ensureQueryData(productsOptions(deps))
})


function StorePage() {
    const deps = useSearch({ from: Route.fullPath })
    const { data } = useSuspenseQuery(productsOptions(deps))

    return <section className="p-4">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            { /* Searchbar & Filters & Sorts */}
            <div className="mb-4 items-end justify-between space-y-4 flex sm:space-y-0 md:mb-8">
                <Searchbar />
                <div className="flex gap-2" >
                    <FilterDropdown />
                    <SortDropdown />
                </div>
            </div>

            { /* Products */}
            <div className="mb-4 grid gap-8 sm:grid-cols-2 md:mb-8 xl:grid-cols-4">
                {data.map((product) =>
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        discount={product.discount}
                        name={product.name}
                        stars={product.stars}
                        people={product.people}
                        price={product.price}
                    />
                )}
            </div>
        </div>
    </section >
}


function SortDropdown() {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
                <ArrowUpZAIcon className='sm:mr-2 h-4 w-4' />
                <span className='hidden sm:block'> Ordenar </span>
                <ChevronDownIcon className='ml-2 h-4 w-4' />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem >
                <Link
                    from={Route.fullPath}
                    search={(prev) => ({ ...prev, sort: "newest" })}
                    className='flex items-center justify-start w-full'
                >
                    <ArrowDownAzIcon className='mr-2 h-4 w-4' />
                    Mas Nuevo
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link
                    from={Route.fullPath}
                    search={(prev) => ({ ...prev, sort: "oldest" })}
                    className='flex items-center justify-start w-full'
                >
                    <ArrowUpZaIcon className='mr-2 h-4 w-4' />
                    Mas Viejo
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link
                    from={Route.fullPath}
                    search={(prev) => ({ ...prev, sort: "price" })}
                    className='flex items-center justify-start w-full'
                >
                    <ArrowDown01Icon className='mr-2 h-4 w-4' />
                    Precio
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}

function FilterDropdown() {
    const handleResetFilters = () => { console.log("reset-filters") }

    return <DropdownMenu>
        <DropdownMenuTrigger>
            <Button size="sm" variant="outline">
                <FilterIcon className='sm:mr-2 h-4 w-4' />
                <span className='hidden sm:block'> Filtrar </span>
                <ChevronDownIcon className='ml-2 h-4 w-4' />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='p-0 border-none'>
            <Card>
                <CardHeader>
                    <CardTitle> Filtros </CardTitle>
                </CardHeader>

                <CardContent>
                    <PriceFilter />
                    <StarsFilter />
                </CardContent>

                <CardFooter>
                    <Button size="sm" type="reset" className='w-full' onClick={handleResetFilters}>
                        Resetear
                    </Button>
                </CardFooter>
            </Card>
        </DropdownMenuContent>
    </DropdownMenu>
}

function PriceFilter() {
    return <div className='flex justify-between gap-6'>
        <div>
            <Label htmlFor="min-price"> Precio Minimo </Label>
            <Input type="number" id="min-price" min="0" max="7000" className="block w-full text-sm" placeholder="$5" required />
        </div>
        <div>
            <Label htmlFor="max-price"> Precio Maximo </Label>
            <Input type="number" id="max-price" min="0" max="7000" className="block w-full text-sm" placeholder="$20" required />
        </div>
    </div>
}

function StarsFilter() {
    return <div className="space-y-4 mt-4">
        <h6 className="mb-2 text-sm font-medium">Estrellas</h6>
        <div className="space-y-2">
            <div className="flex items-center">
                <Input id="five-star" type="radio" value="" name="rating" className="h-4 w-4" />
                <Label htmlFor="five-stars" className="ml-2 flex items-center">
                    <Stars stars={5} />
                </Label>
            </div>

            <div className="flex items-center">
                <Input id="four-star" type="radio" value="" name="rating" className="h-4 w-4" />
                <Label htmlFor="four-stars" className="ml-2 flex items-center">
                    <Stars stars={4} />
                </Label>
            </div>

            <div className="flex items-center">
                <Input id="three-star" type="radio" value="" name="rating" className="h-4 w-4" />
                <Label htmlFor="three-stars" className="ml-2 flex items-center">
                    <Stars stars={3} />
                </Label>
            </div>

            <div className="flex items-center">
                <Input id="two-star" type="radio" value="" name="rating" className="h-4 w-4" />
                <Label htmlFor="two-stars" className="ml-2 flex items-center">
                    <Stars stars={2} />
                </Label>
            </div>

            <div className="flex items-center">
                <Input id="one-star" type="radio" value="" name="rating" className="h-4 w-4" />
                <Label htmlFor="one-star" className="ml-2 flex items-center">
                    <Stars stars={1} />
                </Label>
            </div>
        </div>
    </div>
}
