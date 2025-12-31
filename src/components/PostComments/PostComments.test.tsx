import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PostComments from '.'

describe('PostComments', () => {
  it('deve permitir adicionar dois comentários', async () => {
    render(<PostComments />)

    const campoComentario = screen.getByTestId('campo-comentario')
    const botaoComentar = screen.getByTestId('botao-comentar')

    // Primeiro comentário
    await userEvent.type(campoComentario, 'Primeiro comentário')
    await userEvent.click(botaoComentar)

    // Segundo comentário
    await userEvent.type(campoComentario, 'Segundo comentário')
    await userEvent.click(botaoComentar)

    // Busca todos os comentários renderizados
    const comentarios = screen.getAllByTestId('comment-item')

    // Verifica se existem exatamente dois comentários
    expect(comentarios).toHaveLength(2)

    // Verifica se os textos estão corretos
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
  })
})
