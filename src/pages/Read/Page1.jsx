import React from 'react'


export default function Page1() {
  return (
    <div>
       
      <h3 className="text-xl font-semibold mt-6">1. Information Security Policy</h3>
      <p><strong>Purpose:</strong> To ensure the confidentiality, integrity, and availability of the organization’s and clients’ information by enforcing strict security protocols.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Access Control:</strong> Employees are granted access to company systems based on role-specific needs. All access is protected by multi-factor authentication (MFA) and strong password policies (minimum 12 characters with a mix of uppercase, lowercase, numbers, and symbols).</li>
        <li><strong>Data Protection:</strong> Employees must ensure that client data is handled and stored securely, following the Data Protection Act and GDPR compliance requirements. Any unauthorized access, modification, or disclosure of data is prohibited.</li>
        <li><strong>Incident Reporting:</strong> All security incidents, including data breaches, phishing attempts, or other suspicious activities, must be reported immediately to the IT security team.</li>
        <li><strong>Device Security:</strong> Employees are required to use only authorized devices for work-related activities. Personal devices used to access company systems must comply with security protocols, including encryption and VPN usage.</li>
      </ul>
      <p><strong>Enforcement:</strong> Violations of this policy will result in disciplinary actions, up to and including termination of employment.</p>

      <h3 className="text-xl font-semibold mt-6">2. Acceptable Use Policy</h3>
      <p><strong>Purpose:</strong> To establish guidelines for the proper use of company resources, including computers, networks, and data.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Resource Use:</strong> Company resources must be used exclusively for business purposes. Personal use of company equipment, systems, or internet access is permitted only on a limited basis and must not interfere with work performance or security.</li>
        <li><strong>Prohibited Actions:</strong> Employees are prohibited from downloading or installing unauthorized software, accessing inappropriate content, or engaging in activities that may harm the integrity of the company’s systems or reputation.</li>
        <li><strong>Network Usage:</strong> Employees must avoid excessive or inappropriate use of the company’s network resources. Peer-to-peer file-sharing, unauthorized media streaming, and the transfer of large personal files are strictly prohibited.</li>
      </ul>
      <p><strong>Enforcement:</strong> Non-compliance with this policy will result in penalties, including revocation of system access or disciplinary measures.</p>

      <h3 className="text-xl font-semibold mt-6">3. Privacy and Data Protection Policy</h3>
      <p><strong>Purpose:</strong> To protect personal data and ensure compliance with data protection regulations, including the GDPR.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Data Collection:</strong> Personal data shall only be collected for legitimate business purposes and in compliance with applicable laws. Any unnecessary or excessive data collection is strictly prohibited.</li>
        <li><strong>Data Storage:</strong> All sensitive information, particularly client and employee data, must be encrypted and stored in secure, access-controlled systems.</li>
        <li><strong>Data Sharing:</strong> Data sharing with third parties is permissible only with the explicit consent of the data subject or when required by law. Data sharing must be conducted through secure channels, and records of the transaction must be maintained.</li>
        <li><strong>Retention and Disposal:</strong> Personal data shall be retained only for as long as necessary for the purpose it was collected. Secure methods must be used for data destruction when it is no longer required.</li>
      </ul>
      <p><strong>Enforcement:</strong> Failure to adhere to this policy may result in legal liability for the employee and the organization. Disciplinary action will be taken for any violations.</p>
      
    </div>
  )
}
