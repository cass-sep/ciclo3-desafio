const express = require('express')
const cors = require('cors')

const {Sequelize} = require('./models')

const models = require('./models')

const app = express()
app.use(cors())
app.use(express.json())

let cliente = models.Cliente
let compra = models.Compra
let produto = models.Produto
let itemCompra = models.ItemCompra
let pedido = models.Pedido
let itemPedido = models.ItemPedido
let servico = models.Servico


// criação
    app.post('/novoclientes',async(req,res)=>{
        await cliente.create(
            req.body
        ).then(function(){
            return res.json({
                error:false,
                message:'Novo cliente criado com sucesso.'
            })
        }).catch(function(erro){
            return res.status(400).json({
                error:true,
                message:'Não foi possível conectar.'
            })
        })
    }) //http://localhost:3001/novoclientes

    app.post('/novoprodutos',async(req,res)=>{
        await produto.create(
            req.body
        ).then(function(){
            return res.json({
                error:false,
                message:'Novo produto criado com sucesso!'
            })
        }).catch(function(erro){
            return res.status(400).json({
                error:true,
                message:'Falha: Não foi possível conectar'
            })
        })
    }) //http://localhost:3001/novoprodutos

    app.post('/novacompras',async(req,res)=>{
        await compra.create(
            req.body
        ).then(function(){
            return res.json({
                error:false,
                message:'Nova compra criado com sucesso!'
            })
        }).catch(function(erro){
            return res.status(400).json({
                error:true,
                message:'Falha: Não foi possível conectar'
            })
        })
    }) //http://localhost:3001/novacompras

    app.post('/novoitemcompras',async(req,res)=>{
        await itemCompra.create(
            req.body
        ).then(function(){
            return res.json({
                error:false,
                message:'Novo item criado com sucesso!'
            })
        }).catch(function(erro){
            return res.status(400).json({
                error:true,
                message:'Falha: Não foi possível conectar'
            })
        })
    }) //http://localhost:3001/novoitemcompras

    app.post('/novoservicos',async(req,res)=>{
        await servico.create(
            req.body
        ).then(function(){
            return res.json({
                error:false,
                message:'Novo serviço criado com sucesso.'
            })
        }).catch(function(erro){
            return res.status(400).json({
                error:true,
                message:'Não foi possível conectar.'
            })
        })
    }) //http://localhost:3001/novoservicos

    app.post('/novopedidos',async(req,res)=>{
        await pedido.create(
            req.body
        ).then(function(){
            return res.json({
                error:false,
                message:'Novo pedido criado com sucesso.'
            })
        }).catch(function(erro){
            return res.status(400).json({
                error:true,
                message:'Não foi possível conectar.'
            })
        })
    }) //http://localhost:3001/novopedidos

    app.post('/novoitempedidos',async(req,res)=>{
        await itemPedido.create(
            req.body
        ).then(function(){
            return res.json({
                error:false,
                message:'Novo item criado com sucesso.'
            })
        }).catch(function(erro){
            return res.status(400).json({
                error:true,
                message:'Não foi possível conectar.'
            })
        })
    }) //http://localhost:3001/novoitempedidos


// consultas
    app.get('/listaclientes',async(req,res)=>{
        await cliente.findAll({raw:true}).then(function(listaclientes){
            return res.json(listaclientes)})
    }) //http://localhost:3001/listaclientes

    app.get('/listaprodutos',async(req,res)=>{
        await cliente.findAll({raw:true}).then(function(listaprodutos){
            return res.json(listaprodutos)})
    }) //http://localhost:3001/listaprodutos

    app.get('/listacompras',async(req,res)=>{
        await compra.findAll({raw:true}).then(function(listacompras){
            return res.json(listacompras)})
    }) //http://localhost:3001/listacompras

    app.get('/listaitenscompras',async(req,res)=>{
        await itemCompra.findAll({raw:true}).then(function(listaitem){
            return res.json(listaitem)})
    }) //http://localhost:3001/listaitenscompras

    app.get('/listaservicos',async(req,res)=>{
        await servico.findAll({raw:true}).then(function(servicos){
            return res.json(servicos)})
    }) //http://localhost:3001/listaservicos

    app.get('/listapedidos',async(req,res)=>{
        await pedido.findAll({raw:true}).then(function(pedidos){
            return res.json(pedidos)})
    }) //http://localhost:3001/listapedidos

    app.get('/listaitenspedido',async(req,res)=>{
        await itemPedido.findAll({raw:true}).then(function(itens){
            return res.json(itens)})
    }) //http://localhost:3001/listaitenspedido


// edição
    app.put('/atuclientes', async(req,res)=>{
        await cliente.update(req.body,{
            where:{id:req.body.id}
        }).then(function(){
            return res.json({
                error:false,
                message:'Cliente atualizado com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível atualizar informações.'
            })
        })
    }) // http://localhost:3001/atuclientes

    app.put('/atuprodutos',async(req,res)=>{
        await produto.update(req.body,{
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Produto atualizado com sucesso!'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível atualizar produto.'
            })
        })
    })// http://localhost:3001/atuprodutos

    app.put('/atucompras', async(req,res)=>{
        await compra.update(req.body,{
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Compra atualizada com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível atualizar a compra'
            })
        })
    })// http://localhost:3001/atucompras
    
    app.put('/atuitemcompras', async(req,res)=>{
        await itemCompra.update(req.body,{
            where:Sequelize.and({CompraId:req.body.CompraId},{ProdutoId:req.body.ProdutoId})
        }).then(()=>{
            return res.json({
                error:false,
                message:'Item atualizado com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível atualizar o item'
            })
        })
    })// http://localhost:3001/atuitemcompras

    app.put('/atuservicos', async(req,res)=>{
        await servico.update(req.body,{
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Serviço atualizado com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível atualizar o serviço'
            })
        })
    })// http://localhost:3001/atuservicos

    app.put('/atupedidos', async(req,res)=>{
        await pedido.update(req.body,{
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Pedido atualizado com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível atualizar o pedido'
            })
        })
    })// http://localhost:3001/atupedidos

    app.put('/atuitempedidos', async(req,res)=>{
        await itemPedido.update(req.body,{
            where:Sequelize.and({Pedidoid:req.body.Pedidoid},{ServicoId:req.body.ServicoId})
        }).then(()=>{
            return res.json({
                error:false,
                message:'Item atualizado com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível atualizar o item'
            })
        })
    })// http://localhost:3001/atuitempedidos


// exclusão
    app.get('/excluirclientes',async(req,res)=>{
        if(!await cliente.findByPk(req.body.id)){
            return res.status(400).json({
                error:true,
                message:'Esse cliente não existe!'
            })}
        await cliente.destroy({
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Cliente excluído com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível excluir cliente.'
            })
        })
    })// http://localhost:3001/excluirclientes

    app.get('/excluirprodutos',async(req,res)=>{
        if(!await produto.findByPk(req.body.id)){
            return res.status(400).json({
                error:true,
                message:'Esse produto não existe!'
            })}
        await produto.destroy({
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Produto excluído com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível excluir produto.'
            })
        })
    })// http://localhost:3001/excluirprodutos

    app.get('/excluircompras',async(req,res)=>{
        if(!await compra.findByPk(req.body.id)){
            return res.status(400).json({
                error:true,
                message:'Essa compra não existe!'
            })}
        await compra.destroy({
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Compra excluída com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível excluir compra.'
            })
        })
    })// http://localhost:3001/excluircompras
    
    app.get('/excluiritenscompra',async(req,res)=>{
        if(!await compra.findByPk(req.body.CompraId)){
            return res.status(400).json({
                error:true,
                message:'Essa compra não existe!'
            })}
        if(!await produto.findByPk(req.body.Produtoid)){
            return res.status(400).json({
                error:true,
                message:'Esse produto não existe!'
            })}
        await itemCompra.destroy({
            where:Sequelize.and({CompraId:req.body.CompraId}, {ProdutoId:req.body.ProdutoId})
        }).then(()=>{
            return res.json({
                error:false,
                message:'Item excluído com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível excluir item.'
            })
        })
    })// http://localhost:3001/excluiritenscompra

    app.get('/excluirservicos',async(req,res)=>{
        if(!await servico.findByPk(req.body.id)){
            return res.status(400).json({
                error:true,
                message:'Esse serviço não existe!'
            })}
        await servico.destroy({
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Serviço excluído com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível excluir serviço.'
            })
        })
    })// http://localhost:3001/excluirservicos

    app.get('/excluirpedidos',async(req,res)=>{
        if(!await pedido.findByPk(req.body.id)){
            return res.status(400).json({
                error:true,
                message:'Esse pedido não existe!'
            })}
        await pedido.destroy({
            where:{id:req.body.id}
        }).then(()=>{
            return res.json({
                error:false,
                message:'Pedido excluído com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível excluir pedido.'
            })
        })
    })// http://localhost:3001/excluirpedidos

    app.get('/excluiritempedidos',async(req,res)=>{
        if(!await pedido.findByPk(req.body.PedidoId)){
            return res.status(400).json({
                error:true,
                message:'Esse pedido não existe!'
            })}
        if(!await servico.findByPk(req.body.ServicoId)){
            return res.status(400).json({
                error:true,
                message:'Esse Serviço não existe!'
            })}
        await itemPedido.destroy({
            where:Sequelize.and({PedidoId:req.body.PedidoId},{ServicoId:req.body.ServicoId})
        }).then(()=>{
            return res.json({
                error:false,
                message:'Item excluído com sucesso.'
            })
        }).catch(erro=>{
            return res.status(400).json({
                error:true,
                message:'Não foi possível excluir item.'
            })
        })
    })// http://localhost:3001/excluiritempedidos


let port = process.env.PORT || 3001

app.listen(port, (req,res)=>{
    console.log('Servidor ativo: http://localhost:3001')
})