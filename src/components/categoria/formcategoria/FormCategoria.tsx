import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias${id}`, setCategoria, {
                headers: { }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
               
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()    

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { }
                })
                alert('Categoria foi atualizada com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                } else {
                    alert('Erro ao atualizar categoria.')
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { }
                })
                alert('Categoria foi cadastrada com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                  
                } else {
                    alert('Erro ao cadastrar a categoria.')
                }

            }
        }

        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui a categoria do produto"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-emerald-300 
                               hover:bg-emerald-500 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;