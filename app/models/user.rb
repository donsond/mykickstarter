class User < ApplicationRecord
    attr_reader :password, :password_confirmation, :email_confirmation
    after_initialize :ensure_session_token;
    
    validates :email, :session_token, uniqueness: true
    validates :name, length: {minimum:1}

    validates :email, confirmation: true
    validates :password, confirmation: true
    validates :password_confirmation, :email_confirmation, presence: true;
    validates :email, :email_confirmation, format: {with: URI::MailTo::EMAIL_REGEXP}
    # validates :email_confirmation, presence: {

    # }
    validates :password_confirmation, :password, length: {minimum:6, allow_nil: true}

    validates :name, :email, :password, :password_digest, :session_token, presence: {
        is: true, 
        message: "is required"
    }

    has_many :created_projects,
    class_name: :Project,
    foreign_key: :creator_id

    def self.generate_session_token!
        SecureRandom.urlsafe_base64(16)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email);
        return user if user && user.is_password?(password)
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token!
    end

    def reset_session_token!
        self.session_token = User.generate_session_token!
    end


end
