resource "aws_instance" "EC2-Jenkins" {
    ami = "ami-091138d0f0d41ff90"
    instance_type = "c7i-flex.large"
    vpc_security_group_ids = [aws_security_group.jenkins_sg.id]
    key_name               = "jenkins-key"
    user_data = file("${path.module}/../../../scripts/jenkins-install.sh")

    tags = {
        Description = "EC2 para alojar Jenkins"
        Name = "EC2-JENKINS"
    }
}