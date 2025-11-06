"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const applicationFormSchema = z.object({
  name: z.string().min(1, "Informe seu nome completo."),
  email: z
    .string()
    .min(1, "Informe um e-mail corporativo.")
    .email("Digite um e-mail válido."),
  phone: z.string().min(1, "Informe um telefone ou WhatsApp."),
  company: z.string().min(1, "Informe o nome da empresa."),
  employees: z.string().min(1, "Informe o número aproximado de colaboradores."),
  role: z.string().optional(),
  message: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

export default function FormPage() {
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      role: "",
      message: "",
    },
  });

  const onSubmit = (values: ApplicationFormValues) => {
    console.table(values);
    toast.success("Aplicação recebida! Nossa equipe entrará em contato em breve.");
    form.reset();
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl mx-auto">
            <div className="mb-8 text-center">
                <Link href="/" className="inline-block mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-semibold text-white">
                        V
                    </div>
                </Link>
                <div className="max-w-3xl mx-auto space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Programa ICIA
                    </p>
                    <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                        Pronto para iniciar o diagnóstico de eficiência com IA?
                    </h1>
                    <p className="text-base text-slate-300 sm:text-lg">
                        Preencha o formulário e nossa equipe entrará em contato para entender seus desafios e traçar o plano sob medida para a sua operação.
                    </p>
                </div>
            </div>

            <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-blue-500/10 sm:p-8"
            >
                <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-slate-200">Nome completo</FormLabel>
                        <FormControl>
                        <Input placeholder="Informe seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-slate-200">E-mail corporativo</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="seuemail@empresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-slate-200">Telefone ou WhatsApp</FormLabel>
                        <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-slate-200">Empresa</FormLabel>
                        <FormControl>
                        <Input placeholder="Nome da empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                    control={form.control}
                    name="employees"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-slate-200">
                        Número aproximado de colaboradores
                        </FormLabel>
                        <FormControl>
                        <Input placeholder="Ex.: 150" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-slate-200">Cargo (opcional)</FormLabel>
                        <FormControl>
                        <Input placeholder="Qual é o seu papel na empresa?" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-slate-200">
                        Conte-nos sobre o principal desafio (opcional)
                    </FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Descreva brevemente os objetivos e gargalos que deseja resolver."
                        className="min-h-[120px]"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <Button
                type="submit"
                className="w-full rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 sm:w-auto"
                >
                Enviar aplicação
                </Button>
            </form>
            </Form>
        </div>
    </div>
  );
}