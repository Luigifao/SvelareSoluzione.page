import React, { useState } from 'react';
import styles from './GuiaInventarioAvancado.module.css';
import Header from '../Components/Header';
import Footer from '../Components/Sections/Footer';

function GuiaInventarioAvancado() {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        cpf: '',
        telefone: '',
        email: '',
        endereco: '',
        tipoBem: '',
        descricaoBem: '',
        valorEstimado: '',
        localizacao: '',
        observacoes: '',
        dataInventario: '',
        responsavel: '',
        documento: null
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Limpar erro quando o usuário começar a digitar
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            documento: file
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.nomeCompleto.trim()) {
            newErrors.nomeCompleto = 'Nome completo é obrigatório';
        }
        
        if (!formData.cpf.trim()) {
            newErrors.cpf = 'CPF é obrigatório';
        } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formData.cpf)) {
            newErrors.cpf = 'CPF deve estar no formato 000.000.000-00';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }
        
        if (!formData.telefone.trim()) {
            newErrors.telefone = 'Telefone é obrigatório';
        }
        
        if (!formData.tipoBem) {
            newErrors.tipoBem = 'Tipo de bem é obrigatório';
        }
        
        if (!formData.descricaoBem.trim()) {
            newErrors.descricaoBem = 'Descrição do bem é obrigatória';
        }
        
        if (!formData.valorEstimado) {
            newErrors.valorEstimado = 'Valor estimado é obrigatório';
        }
        
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }
        
        try {
            // Simular envio do formulário
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Reset form
            setFormData({
                nomeCompleto: '',
                cpf: '',
                telefone: '',
                email: '',
                endereco: '',
                tipoBem: '',
                descricaoBem: '',
                valorEstimado: '',
                localizacao: '',
                observacoes: '',
                dataInventario: '',
                responsavel: '',
                documento: null
            });
            
            alert('Inventário enviado com sucesso!');
        } catch (error) {
            alert('Erro ao enviar inventário. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatCPF = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    };

    const formatPhone = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    };

    const handleCPFChange = (e) => {
        const formatted = formatCPF(e.target.value);
        setFormData(prev => ({ ...prev, cpf: formatted }));
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhone(e.target.value);
        setFormData(prev => ({ ...prev, telefone: formatted }));
    };

    return (
        <>
            <Header />
            <main className={styles.guiaInventarioPage}>
                <div className={styles.container}>
                    {/* Cabeçalho da página */}
                    <div className={styles.pageHeader}>
                        <div className={styles.logoSection}>
                            <div className={styles.logoPlaceholder}>
                                <span>SVELARE</span>
                            </div>
                        </div>
                        <div className={styles.titleSection}>
                            <h1>GUIA DE INVENTÁRIO</h1>
                            <p className={styles.subtitle}>Sistema Digital de Gestão Patrimonial</p>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill}></div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.inventarioForm}>
                        {/* Seção de Informações Pessoais */}
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionNumber}>01</span>
                                <div>
                                    <span>DADOS PESSOAIS</span>
                                    <small>Informações do solicitante</small>
                                </div>
                            </h2>
                            
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="nomeCompleto" className={styles.required}>
                                        Nome Completo
                                    </label>
                                    <input
                                        type="text"
                                        id="nomeCompleto"
                                        name="nomeCompleto"
                                        value={formData.nomeCompleto}
                                        onChange={handleInputChange}
                                        className={`${styles.inputField} ${errors.nomeCompleto ? styles.error : ''}`}
                                        placeholder="Digite seu nome completo"
                                    />
                                    {errors.nomeCompleto && <span className={styles.errorMessage}>{errors.nomeCompleto}</span>}
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <label htmlFor="cpf" className={styles.required}>CPF</label>
                                    <input
                                        type="text"
                                        id="cpf"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleCPFChange}
                                        maxLength="14"
                                        className={`${styles.inputField} ${errors.cpf ? styles.error : ''}`}
                                        placeholder="000.000.000-00"
                                    />
                                    {errors.cpf && <span className={styles.errorMessage}>{errors.cpf}</span>}
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <label htmlFor="telefone" className={styles.required}>Telefone</label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handlePhoneChange}
                                        maxLength="15"
                                        className={`${styles.inputField} ${errors.telefone ? styles.error : ''}`}
                                        placeholder="(00) 00000-0000"
                                    />
                                    {errors.telefone && <span className={styles.errorMessage}>{errors.telefone}</span>}
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email" className={styles.required}>E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`${styles.inputField} ${errors.email ? styles.error : ''}`}
                                        placeholder="seu.email@exemplo.com"
                                    />
                                    {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                                </div>
                            </div>
                            
                            <div className={styles.inputGroup}>
                                <label htmlFor="endereco">Endereço Completo</label>
                                <textarea
                                    id="endereco"
                                    name="endereco"
                                    value={formData.endereco}
                                    onChange={handleInputChange}
                                    className={styles.textareaField}
                                    placeholder="Rua, número, bairro, cidade, estado, CEP"
                                    rows="3"
                                />
                            </div>
                        </div>

                        {/* Seção de Dados do Bem */}
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionNumber}>02</span>
                                <div>
                                    <span>INFORMAÇÕES DO BEM</span>
                                    <small>Detalhes do patrimônio</small>
                                </div>
                            </h2>
                            
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="tipoBem" className={styles.required}>Categoria do Bem</label>
                                    <select
                                        id="tipoBem"
                                        name="tipoBem"
                                        value={formData.tipoBem}
                                        onChange={handleInputChange}
                                        className={`${styles.selectField} ${errors.tipoBem ? styles.error : ''}`}
                                    >
                                        <option value="">Selecione a categoria</option>
                                        <option value="imovel">🏠 Imóvel</option>
                                        <option value="veiculo">🚗 Veículo</option>
                                        <option value="joia">💎 Joia/Objeto de Valor</option>
                                        <option value="eletronico">📱 Eletrônico</option>
                                        <option value="movel">🪑 Móvel</option>
                                        <option value="investimento">📈 Investimento</option>
                                        <option value="outros">📦 Outros</option>
                                    </select>
                                    {errors.tipoBem && <span className={styles.errorMessage}>{errors.tipoBem}</span>}
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <label htmlFor="valorEstimado" className={styles.required}>Valor Estimado (R$)</label>
                                    <input
                                        type="number"
                                        id="valorEstimado"
                                        name="valorEstimado"
                                        value={formData.valorEstimado}
                                        onChange={handleInputChange}
                                        className={`${styles.inputField} ${errors.valorEstimado ? styles.error : ''}`}
                                        placeholder="0,00"
                                        step="0.01"
                                        min="0"
                                    />
                                    {errors.valorEstimado && <span className={styles.errorMessage}>{errors.valorEstimado}</span>}
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <label htmlFor="localizacao">Localização Atual</label>
                                    <input
                                        type="text"
                                        id="localizacao"
                                        name="localizacao"
                                        value={formData.localizacao}
                                        onChange={handleInputChange}
                                        className={styles.inputField}
                                        placeholder="Onde o bem está localizado"
                                    />
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <label htmlFor="documento">Documentos Anexos</label>
                                    <input
                                        type="file"
                                        id="documento"
                                        name="documento"
                                        onChange={handleFileChange}
                                        className={styles.fileField}
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                    <small className={styles.fileHelp}>
                                        Anexe documentos relevantes (PDF, JPG, PNG - máx. 5MB)
                                    </small>
                                </div>
                            </div>
                            
                            <div className={styles.inputGroup}>
                                <label htmlFor="descricaoBem" className={styles.required}>Descrição Detalhada</label>
                                <textarea
                                    id="descricaoBem"
                                    name="descricaoBem"
                                    value={formData.descricaoBem}
                                    onChange={handleInputChange}
                                    className={`${styles.textareaField} ${errors.descricaoBem ? styles.error : ''}`}
                                    placeholder="Descreva detalhadamente o bem: marca, modelo, características, estado de conservação, número de série, etc."
                                    rows="4"
                                />
                                {errors.descricaoBem && <span className={styles.errorMessage}>{errors.descricaoBem}</span>}
                            </div>
                        </div>

                        {/* Seção de Observações */}
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionNumber}>03</span>
                                <div>
                                    <span>FINALIZAÇÃO</span>
                                    <small>Últimas informações</small>
                                </div>
                            </h2>
                            
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="dataInventario">Data do Inventário</label>
                                    <input
                                        type="date"
                                        id="dataInventario"
                                        name="dataInventario"
                                        value={formData.dataInventario}
                                        onChange={handleInputChange}
                                        className={styles.inputField}
                                    />
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <label htmlFor="responsavel">Responsável pela Avaliação</label>
                                    <input
                                        type="text"
                                        id="responsavel"
                                        name="responsavel"
                                        value={formData.responsavel}
                                        onChange={handleInputChange}
                                        className={styles.inputField}
                                        placeholder="Nome do responsável (opcional)"
                                    />
                                </div>
                            </div>
                            
                            <div className={styles.inputGroup}>
                                <label htmlFor="observacoes">Observações Gerais</label>
                                <textarea
                                    id="observacoes"
                                    name="observacoes"
                                    value={formData.observacoes}
                                    onChange={handleInputChange}
                                    className={styles.textareaField}
                                    placeholder="Informações adicionais relevantes para o inventário"
                                    rows="4"
                                />
                            </div>
                        </div>

                        {/* Seção de Ações */}
                        <div className={styles.actionSection}>
                            <button type="button" className={styles.btnSecondary}>
                                💾 Salvar Rascunho
                            </button>
                            <button 
                                type="submit" 
                                className={styles.btnPrimary}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? '⏳ Enviando...' : '✅ Finalizar Inventário'}
                            </button>
                        </div>
                    </form>

                    {/* Rodapé informativo */}
                    <div className={styles.infoFooter}>
                        <div className={styles.infoCard}>
                            <h3>📋 Checklist de Documentos</h3>
                            <div className={styles.checklist}>
                                <label className={styles.checklistItem}>
                                    <input type="checkbox" />
                                    <span>RG e CPF do solicitante</span>
                                </label>
                                <label className={styles.checklistItem}>
                                    <input type="checkbox" />
                                    <span>Comprovante de residência</span>
                                </label>
                                <label className={styles.checklistItem}>
                                    <input type="checkbox" />
                                    <span>Documentos do bem</span>
                                </label>
                                <label className={styles.checklistItem}>
                                    <input type="checkbox" />
                                    <span>Notas fiscais ou recibos</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className={styles.infoCard}>
                            <h3>⚖️ Informações Legais</h3>
                            <p>
                                Este inventário segue as normas estabelecidas pelo <strong>Código Civil Brasileiro</strong> 
                                e legislação específica. Todos os dados fornecidos são de responsabilidade do declarante 
                                e podem ser verificados pelos órgãos competentes.
                            </p>
                        </div>
                        
                        <div className={styles.infoCard}>
                            <h3>🔒 Segurança dos Dados</h3>
                            <p>
                                Suas informações são protegidas por <strong>criptografia SSL</strong> e 
                                armazenadas em servidores seguros. Seguimos rigorosamente a 
                                <strong>LGPD</strong> para garantir a privacidade dos seus dados.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default GuiaInventarioAvancado;
